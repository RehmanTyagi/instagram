import styles from './BackButton.module.css'

import { Link } from "react-router-dom";
function BackButton(props) {
    return (<Link to="/" className={styles.backButton}>Back to Login</Link>);
}

export default BackButton;