import styles from './Form.module.css'

// hooks

// external libraries
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

// imported components
import BrandLogo from "../Logo/Logo.compnent";
import Input from "../Input/Input.component";
import Button from "../Button/Button.component";
import HorizontalLine from "../HorizontalLine/HorizontalLine.component";

function Form() {
    return (
        <form className={`${styles.form} ${styles.containerEffect}`}>
            <BrandLogo />
            <Input type='text' placeholder='Phone number, username, or email' />
            <Input type='password' placeholder='Password' />
            <Button children="Log in" />
            <HorizontalLine />
            <Link className={styles.googleSign_in}><FaGoogle className={styles.googleLogo} /> Sign in with Google</Link>
            <Link to="forgot_password" className={styles.forgetPassword}>Forgot Password?</Link>
        </form>
    );
}

export default Form;