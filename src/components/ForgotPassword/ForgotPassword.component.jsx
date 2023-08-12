import styles from './ForgotPassword.module.css'

// icons 
import { FaUnlockAlt } from 'react-icons/fa'

// imported components
import Input from "../Input/Input.component";
import Button from "../Button/Button.component";
import HorizontalLine from '../HorizontalLine/HorizontalLine.component'
import CreateAccountBox from "../CreateAccountBox/CreateAccountBox.component";
import Box from '../Box/Box.component'


function ForgotPassword({ style }) {
    return (
        <div style={style}>
            <Box className={`${styles.forgetPasswordBox}`}>
                <div className={styles.iconWrapper}>
                    <FaUnlockAlt className={styles.icon} />
                </div>
                <h2 className={styles.title}>Trouble logging in?</h2>
                <p className={styles.paragraph}>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
                <Input placeholder="Email, Phone or Username" />
                <Button children="Send Login Link" />
                <HorizontalLine />
                <CreateAccountBox text="Create an account!" type="Sign Up" />
            </Box>
        </div>
    );
}

export default ForgotPassword;