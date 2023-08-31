import styles from './CreateAccountBox.module.css'

// imported components
import { Link } from 'react-router-dom'
function CreateAccountBox({ text, type }) {
    return (
        <div className={`${styles.signUp_box} ${styles.containerEffect}`}><p>{text}</p> <Link to="sign_up" className={`${styles.signUp_Link}`}>{type}</Link></div>
    );
}

export default CreateAccountBox;