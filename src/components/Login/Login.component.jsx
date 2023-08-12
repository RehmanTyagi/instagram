import styles from './Login.module.css'

// imported icons
import { FaGoogle } from 'react-icons/fa'
// imported components
import CreateAccountBox from "../CreateAccountBox/CreateAccountBox.component"
import { Link } from 'react-router-dom'
import Input from "../Input/Input.component";
import Button from "../Button/Button.component";
import HorizontalLine from "../HorizontalLine/HorizontalLine.component";

function LoginForm() {
    return (
        <div className={`${styles.loginForm}`}>
            <div className={styles.wrapper}>
                <form className={`${styles.form} ${styles.containerEffect}`}>
                    <h1 className={styles.brandLogo}>SastaGram</h1>
                    <Input type='text' placeholder='Phone number, username, or email' />
                    <Input type='password' placeholder='Password' />
                    <Button children="Log in" />
                    <HorizontalLine />
                    <Link className={styles.googleSign_in}><FaGoogle className={styles.googleLogo} /> Sign in with Google</Link>
                    <Link to="forgot_password" className={styles.forgetPassword}>Forgot Password?</Link>
                </form>
                <CreateAccountBox text={`Don't have an account?`} type="Sign Up" />
            </div>
            <p className={styles.copyrights}><strong>SastaGram</strong> Developed by Rehmann Chaudhary</p>
        </div>
    );
}

export default LoginForm;