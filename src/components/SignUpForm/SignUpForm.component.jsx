import styles from './SignUpForm.module.css'

import Input from "../../UI/Input/Input.component";
import Box from "../Box/Box.component";
import BrandLogo from "../../UI/Logo/Logo.compnent";
import Button from "../../UI/Button/Button.component";
import BackButton from "../BackButton/BackButton.component";
// import ToastNotification from "../../UI/ToastNotification/ToastNotification";
import PasswordHealthChecker from "../PasswordHealthChecker/PasswordHealthChecker.component";
import { useReducer, useState } from "react";
import { firebaseApp } from "../../services/firebase.config";
import { createUserWithEmailAndPassword, getAuth, AuthErrorCodes } from 'firebase/auth'

const initialUserInfo = {
    email: '',
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
}

function Reducer(state, action) {
    switch (action.type) {
        case "email": return { ...state, email: action.payload }
        case "fullName": return { ...state, fullName: action.payload }
        case "userName": return { ...state, userName: action.payload }
        case "password": return { ...state, password: action.payload }
        case "confirmPassword": return { ...state, confirmPassword: action.payload }
        case "resetForm": return initialUserInfo
        default: throw new Error("unkown error")
    }
}

function SignUpForm() {
    const [state, dispatch] = useReducer(Reducer, initialUserInfo)
    const { email, password, confirmPassword } = state
    // const [userCreated, setUserCreated] = useState(false)
    const [error, setError] = useState('')


    const auth = getAuth(firebaseApp)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) return setError("passwords do not match!")

        createUserWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                // setUserCreated(true)
                setError('')
                dispatch({ type: "resetForm" })
                window.location.href = "/"
            }
        ).catch(err => {
            if (err.code === AuthErrorCodes.WEAK_PASSWORD) setError("weak password")
            if (err.code === AuthErrorCodes.EMAIL_EXISTS) setError("user already exsisted")
            if (err.code === AuthErrorCodes.INVALID_EMAIL) setError("Email is Invalid")
        })


    }


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <Box className={styles.signUpForm}>
                    <BrandLogo />
                    <p>Sign up to see photos and videos from your friends.</p>
                    <p style={{ color: 'red', fontWeight: "500" }}>{error}</p>
                    <Input event={(e) => dispatch({ type: "email", payload: e.target.value })} placeholder="Email" />
                    <Input event={(e) => dispatch({ type: "fullName", payload: e.target.value })} placeholder="Full Name" />
                    <Input event={(e) => dispatch({ type: "userName", payload: e.target.value })} placeholder="Username" />
                    <Input event={(e) => dispatch({ type: "password", payload: e.target.value })} placeholder="Password" />
                    {
                        password && <PasswordHealthChecker password={password} />
                    }
                    <Input value={confirmPassword} event={(e) => dispatch({ type: "confirmPassword", payload: e.target.value })} placeholder="Re Enter Password" />
                    <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                    <Button type="submit" children="Signup" />
                    <BackButton />
                </Box>
            </form>
        </div>
    );
}

export default SignUpForm;