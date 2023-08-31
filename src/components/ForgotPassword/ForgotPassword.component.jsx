import styles from './ForgotPassword.module.css'

// icons 
import { FaUnlockAlt } from 'react-icons/fa'

// imported components
import Input from "../../UI/Input/Input.component";
import Button from "../../UI/Button/Button.component";
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine.component";
import CreateAccountBox from "../CreateAccountBox/CreateAccountBox.component";
import Box from '../Box/Box.component'
import BackButton from "../BackButton/BackButton.component";
import { sendPasswordResetEmail, getAuth, AuthErrorCodes } from "firebase/auth";
import { firebaseApp } from "../../utils/firebase.config";
import { useState } from "react";

function ForgotPassword({ style }) {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const auth = getAuth(firebaseApp)
    const handleResetForm = (e) => {
        e.preventDefault()

        sendPasswordResetEmail(auth, email).then(user => {
            console.log(user)
            alert("link sent")
        }).catch((err) => {
            if (err.code === AuthErrorCodes.INVALID_EMAIL) setError("Email is invalid")
            if (err.code === AuthErrorCodes.INVALID_RECIPIENT_EMAIL) setError("user not in database")
        })
    }

    return (
        <div style={style}>
            <form onSubmit={handleResetForm}>
                <Box className={`${styles.forgetPasswordBox}`}>
                    <div className={styles.iconWrapper}>
                        <FaUnlockAlt className={styles.icon} />
                    </div>
                    <h2 className={styles.title}>Trouble logging in?</h2>
                    <p style={{ color: "red", fontWeight: "600" }}>{error}</p>
                    <p className={styles.paragraph}>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
                    <Input event={(e) => setEmail(e.target.value)} placeholder="Email, Phone or Username" />
                    <Button children="Send Reset Link" />
                    <HorizontalLine />
                    <CreateAccountBox text="Create an account!" type="Sign Up" />
                    <BackButton />
                </Box>
            </form>
        </div>
    );
}

export default ForgotPassword;