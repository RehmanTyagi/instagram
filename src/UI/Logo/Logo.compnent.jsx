import styles from './Logo.module.css'
import { Link } from "react-router-dom";
function BrandLogo({ className }) {
    return (<Link to="/" className={`${styles.brandLogo} ${className}`}>SocialGram <p className={styles.tagLine}>Made By Rehman</p></Link>);
}

export default BrandLogo;