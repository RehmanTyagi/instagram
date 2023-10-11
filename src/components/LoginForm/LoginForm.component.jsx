import styles from './LoginForm.module.css';

// imported components
import banner from '../../assets/login-banner.png';
import CreateAccountBox from "../CreateAccountBox/CreateAccountBox.component";
import Form from "../../UI/Form/Form.component";

function LoginForm() {
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={banner} alt="poster" />
            <div className={`${styles.loginForm}`}>
                <div className={styles.wrapper}>
                    <Form />
                    <CreateAccountBox text={`Don't have an account?`} type="Sign Up" />
                </div>
                <p className={styles.copyrights}><strong>SocialGram</strong> Developed by Rehmann Chaudhary</p>
            </div>
        </div>
    );
}

export default LoginForm;