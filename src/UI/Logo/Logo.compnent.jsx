import styles from './Logo.module.css'
import { Link } from "react-router-dom";
function BrandLogo({ className }) {
    return (<Link to="/" className={`${styles.brandLogo} ${className}`}>SastaGram</Link>);
}

export default BrandLogo;