import styles from './SignUpForm.module.css';

// hooks
import { useEffect, useReducer, useState } from "react";

import Input from "../../UI/Input/Input.component";
import Box from "../Box/Box.component";
import BrandLogo from "../../UI/Logo/Logo.compnent";
import Button from "../../UI/Button/Button.component";
import BackButton from "../BackButton/BackButton.component";
import LazzyLoader from "../../UI/LoadingSpinner/LoadingSpinner.component";
import PasswordHealthChecker from "../PasswordHealthChecker/PasswordHealthChecker.component";
import { createUserWithEmailAndPassword, getAuth, AuthErrorCodes } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { db, firebase } from "../../lib/firebase";
import { doesUsernameExist } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { uploadImgToStorage, downloadImgFromStorage } from "../../services/firebase";

const initialUserInfo = {
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    description: '',
    userImg: ''
};

function Reducer(state, action) {
    switch (action.type) {
        case "email": return { ...state, email: action.payload };
        case "fullName": return { ...state, fullName: action.payload };
        case "userName": return { ...state, userName: action.payload };
        case "description": return { ...state, description: action.payload };
        case "password": return { ...state, password: action.payload };
        case "confirmPassword": return { ...state, confirmPassword: action.payload };
        case "profilePicture": return { ...state, userImg: action.payload };
        case "resetForm": return initialUserInfo;
        default: throw new Error("unkown error");
    }
}

function SignUpForm() {
    const [state, dispatch] = useReducer(Reducer, initialUserInfo);
    const { userName, email, fullName, password, confirmPassword, description, userImg } = state;
    // error handling
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // firebase Auth
    const auth = getAuth(firebase);
    const navigate = useNavigate();

    // change the title of page
    useEffect(function () {
        document.title = "SignUp - SocialGram";
    }, []);

    const uploadProfilePicture = () => {

        const input = document.createElement('input')
        input.type = 'file'
        input.click()
        input.onchange = () => {
            const selectedPicture = input.files[0]
            if (selectedPicture.type === 'image/jpeg' || selectedPicture.type === 'image/png' || selectedPicture.type === 'image/jpg') {
                dispatch({ type: "profilePicture", payload: selectedPicture })
            } else alert("file type not supported, upload jpeg | png or jpg")
        }

    }

    const handleUserData = async (userCredential, userProfilePicture) => {
        await setDoc(doc(db, 'users', userCredential.user.uid), {
            userId: userCredential.user.uid,
            userName: userName,
            fullName: fullName,
            emailAddress: email,
            description: description,
            following: [],
            followers: [],
            userProfilePicture: userProfilePicture,
            dateCreated: Date.now(),
            posts: []
        }).catch(err => console.log(err.message))
    }
    const handleUserDescription = (e) => {
        if (e.target.value.length < 220) {
            dispatch({ type: "description", payload: e.target.value })
            setError('')
        }
        else return setError('description should be less than 100 words!')
    }

    // submission handling
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return setError("passwords do not match!");
        } else {
            if (!userImg) return setError('upload profile picture')
        }

        setIsLoading(true);

        const userNameExist = await doesUsernameExist(userName);

        if (userNameExist) {
            setIsLoading(false)
            return setError('username already used!')
        }

        createUserWithEmailAndPassword(auth, email, password).then(
            async (userCredential) => {
                uploadImgToStorage(userImg, `userProfilePicture/${email}`)
                    .then(() => downloadImgFromStorage(`userProfilePicture/${email}`).then(ProfilePicUrl => handleUserData(userCredential, ProfilePicUrl)))
                toast.success("account created successfully!")
                setError('');
                dispatch({ type: "resetForm" });
                setIsLoading(false);
                navigate("/");
            }
        ).catch(err => {
            setIsLoading(false);
            if (err.code === AuthErrorCodes.WEAK_PASSWORD) setError("weak password");
            if (err.code === AuthErrorCodes.EMAIL_EXISTS) setError("user already exsisted");
            if (err.code === AuthErrorCodes.INVALID_EMAIL) setError("Email is Invalid");
        });
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <Box className={styles.signUpForm}>
                    <BrandLogo />
                    <p>Sign up to see photos and videos from your friends.</p>
                    <p style={{ color: 'red', fontWeight: "500" }}>{error}</p>
                    <div onClick={uploadProfilePicture} className={styles.uploadFileBox}>Upload Profile Picture</div>
                    <Input value={email} event={(e) => dispatch({ type: "email", payload: e.target.value })} placeholder="Email" />
                    <Input value={fullName} event={(e) => dispatch({ type: "fullName", payload: e.target.value })} placeholder="Full Name" />
                    <Input value={userName} event={(e) => dispatch({ type: "userName", payload: e.target.value })} placeholder="Username" />
                    <Input value={description} event={handleUserDescription} placeholder="description" />
                    <Input value={password} event={(e) => dispatch({ type: "password", payload: e.target.value })} placeholder="Password" />
                    {
                        password && <PasswordHealthChecker password={password} />
                    }
                    <Input value={confirmPassword} event={(e) => dispatch({ type: "confirmPassword", payload: e.target.value })} placeholder="Re Enter Password" />
                    <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                    <Button type="submit">{isLoading ? <LazzyLoader><LazzyLoader.LoadingSpinner /></LazzyLoader> : 'Sign Up'}</Button>
                    <BackButton text="Back to login" />
                </Box>
            </form>
        </div>
    );
}

export default SignUpForm;