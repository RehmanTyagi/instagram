import styles from './ForgotPassword.module.css';

// icons 
import { FaUnlockAlt } from 'react-icons/fa';

// imported components
import Input from "../../UI/Input/Input.component";
import Button from "../../UI/Button/Button.component";
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine.component";
import CreateAccountBox from "../CreateAccountBox/CreateAccountBox.component";
import LazzySpinner from "../../UI/LoadingSpinner/LoadingSpinner.component";
import Box from '../Box/Box.component';
import BackButton from "../BackButton/BackButton.component";
import { sendPasswordResetEmail, getAuth, AuthErrorCodes } from "firebase/auth";
import { firebase } from "../../lib/firebase";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword({ style }) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const IncludedAtSign = email.includes("@");
    const navigate = useNavigate();

    const auth = getAuth(firebase);

    const handleForgetSubmit = (e) => {
        e.preventDefault();
        if (!IncludedAtSign) return setError("email should contain @");
        setIsLoading(true);

        sendPasswordResetEmail(auth, email).then(user => {
            toast.success("forget link sent to you!");
            setError('');
            setEmail('');
            navigate('/');
        }).catch((err) => {
            setIsLoading(false);
            setError("");
            if (err.code === AuthErrorCodes.INVALID_EMAIL) {
                setError("Email is invalid");
            }
            if (err.code === AuthErrorCodes.INVALID_RECIPIENT_EMAIL) {
                toast.error("email not found!");
            }
        });
    };

    useEffect(function () {
        document.title = 'Reset Password - SocialGram'
    }, [])

    return (
        <div className={styles.forgotContainer}>
            <form onSubmit={handleForgetSubmit}>
                <Box className={`${styles.forgetPasswordBox}`}>
                    <div className={styles.iconWrapper}>
                        <FaUnlockAlt className={styles.icon} />
                    </div>
                    <h2 className={styles.title}>Trouble logging in?</h2>
                    <p style={{ color: "red", fontWeight: "600" }}>{error}</p>
                    <p className={styles.paragraph}>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
                    <Input value={email} event={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <Button>{isLoading ? <LazzySpinner><LazzySpinner.LoadingSpinner /></LazzySpinner> : <p>Send Reset Link</p>}</Button>
                    <HorizontalLine />
                    <CreateAccountBox text="Create an account!" type="Sign Up" />
                    <BackButton />
                </Box>
            </form>
        </div>
    );
}

export default ForgotPassword;