import styles from './Header.module.css'

import { Outlet } from "react-router-dom";
import BrandLogo from "../../UI/Logo/Logo.compnent";

function Header() {
    return (
        <>
            <div className={styles.headerContainer}>
                <BrandLogo className={styles.brandColor} />
            </div>
            <Outlet />
        </>
    );
}

export default Header;