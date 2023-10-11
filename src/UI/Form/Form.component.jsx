import styles from './Form.module.css';

// hooks
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// external libraries
import { Link } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

// imported components
import BrandLogo from "../Logo/Logo.compnent";
import LazzyLoader from "../LoadingSpinner/LoadingSpinner.component";
import Input from "../Input/Input.component";
import Button from "../Button/Button.component";
import PasswordHealthChecker from "../../components/PasswordHealthChecker/PasswordHealthChecker.component";
import HorizontalLine from "../HorizontalLine/HorizontalLine.component";
import { signInWithEmailAndPassword, getAuth, AuthErrorCodes, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebase } from "../../lib/firebase";
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';


function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ errorMessage: '', type: '' });
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef();
    const navigate = useNavigate();

    // firebase auth
    let auth = getAuth(firebase);
    let LoginProvider = new GoogleAuthProvider();

    useEffect(function () {
        inputRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                console.log(userCredential.user)
                setError('');
                setEmail('');
                setPassword('');
                navigate('dashboard');
                toast.success("logged in");
            }
        ).catch((err) => {
            setIsLoading(false);
            if (err.code === "auth/user-not-found") {
                setError('user does not in our database');
                toast("User Not Found!");
            }
            if (err.code === AuthErrorCodes.INVALID_EMAIL) {
                setError({ errorMessage: 'Email is invalid!', type: 'email' });
                toast.error("Wrong Email!");
            }
            if (err.code === AuthErrorCodes.INVALID_PASSWORD) {
                setError({ errorMessage: 'Password does not match!', type: 'password' });
                toast.error("Invalid Password!");
            }
        });

    };

    const HandleGoogleLogin = () => {
        signInWithPopup(auth, LoginProvider).then((userCredential) => {
            toast.success("Logged In");
            navigate('dashboard');
        }).catch(() => {
            if (AuthErrorCodes.POPUP_CLOSED_BY_USER) setError("Popup Canceled by you");
            toast.error(error);
        });
    };

    const passwordShowHide = () => {
        setIsPasswordShow(!isPasswordShow);
    };

    useEffect(function () {
        document.title = 'Login - SocialGram';
    }, []);

    return (
        <form onSubmit={handleSubmit} className={`${styles.form} ${styles.containerEffect}`}>
            <BrandLogo />
            <p style={{ color: "red", fontWeight: "500", textAlign: "center" }}>{error.errorMessage}</p>
            <Input value={email} className={error.type === 'email' && 'inputValidationError'} inputRef={inputRef} event={(e) => setEmail(e.target.value)} type='text' placeholder='Email' />
            <div className={styles.passwordInputBox}>
                {
                    isPasswordShow ? <FaEye onClick={passwordShowHide} className={styles.passwordShowBtn} /> : <FaEyeSlash className={styles.passwordShowBtn} onClick={passwordShowHide} />
                }
                <Input value={[password]} className={`${styles.passwordInput} ${error.type === 'password' && 'inputValidationError'}`} event={(e) => { setPassword(e.target.value); }} type={isPasswordShow ? "text" : "password"} placeholder='Password' />
            </div>
            {
                password && <PasswordHealthChecker password={password} />
            }
            <Button type="submit" children="Log in">{isLoading ? <LazzyLoader><LazzyLoader.LoadingSpinner /></LazzyLoader> : <p>Log In</p>}</Button>
            <HorizontalLine />
            <Link onClick={HandleGoogleLogin} className={styles.googleSign_in}><FaGoogle className={styles.googleLogo} /> Sign in with Google</Link>
            <Link to="forgot_password" className={styles.forgetPassword}>Forgot Password?</Link>
        </form>
    );
}

export default Form;