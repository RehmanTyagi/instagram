import styles from './BackButton.module.css';

import { Link } from "react-router-dom";
function BackButton({ text }) {
    return (<Link to="/" className={styles.backButton}>{text}</Link>);
}

export default BackButton;