import styles from './Form.module.css'

// hooks
import { useEffect, useRef, useState } from "react";

// external libraries
import { Link } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

// imported components
import BrandLogo from "../Logo/Logo.compnent";
import Input from "../Input/Input.component";
import Button from "../Button/Button.component";
import PasswordHealthChecker from "../../components/PasswordHealthChecker/PasswordHealthChecker.component";
import HorizontalLine from "../HorizontalLine/HorizontalLine.component";
import { signInWithEmailAndPassword, getAuth, AuthErrorCodes, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "../../utils/firebase.config";

function Form() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isPasswordShow, setIsPasswordShow] = useState(false)
    const inputRef = useRef()
    // firebase auth
    let auth = getAuth(firebaseApp)
    let LoginProvider = new GoogleAuthProvider()

    console.log(auth)
    useEffect(function () {
        inputRef.current.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                setError('')
                setEmail("")
                setPassword("")
                window.location.href = "dashboard"
            }
        ).catch((err) => {
            if (err.code === "auth/user-not-found") setError('user does not in our database')
            console.log(err.code)
            if (err.code === AuthErrorCodes.INVALID_EMAIL) setError('Email is invalid!')
            if (err.code === AuthErrorCodes.INVALID_PASSWORD) setError('Password does not match!')
        })

    }

    const HandleGoogleLogin = () => {
        signInWithPopup(auth, LoginProvider).then((userCredential) => {
            window.location.href = "dashboard"
        }).catch((err) => {
            if (AuthErrorCodes.POPUP_CLOSED_BY_USER) setError("Popup Canceled by you")
        })
    }

    const passwordShowHide = () => {
        setIsPasswordShow(!isPasswordShow)
    }
    return (
        <form onSubmit={handleSubmit} className={`${styles.form} ${styles.containerEffect}`}>
            <BrandLogo />
            <p style={{ color: "red", fontWeight: "500", textAlign: "center" }}>{error}</p>
            <Input value={email} inputRef={inputRef} event={(e) => setEmail(e.target.value)} type='text' placeholder='Email' />
            <div className={styles.passwordInputBox}>
                {
                    isPasswordShow ? <FaEye onClick={passwordShowHide} className={styles.passwordShowBtn} /> : <FaEyeSlash className={styles.passwordShowBtn} onClick={passwordShowHide} />
                }
                <Input value={[password]} className={styles.passwordInput} event={(e) => { setPassword(e.target.value) }} type={isPasswordShow ? "text" : "password"} placeholder='Password' />
            </div>
            {
                password && <PasswordHealthChecker password={password} />
            }
            <Button type="submit" children="Log in" />
            <HorizontalLine />
            <Link onClick={HandleGoogleLogin} className={styles.googleSign_in}><FaGoogle className={styles.googleLogo} /> Sign in with Google</Link>
            <Link to="forgot_password" className={styles.forgetPassword}>Forgot Password?</Link>
        </form>
    );
}

export default Form;