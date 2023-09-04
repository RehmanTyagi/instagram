import styles from './Header.module.css'

import { Outlet } from "react-router-dom";
import BrandLogo from "../../UI/Logo/Logo.compnent";
import Button from "../../UI/Button/Button.component";
import { signOut, getAuth } from 'firebase/auth'
import { Fragment } from "react";
import { firebaseApp } from "../../utils/firebase.config";
function Header() {

    // log out system
    const auth = getAuth(firebaseApp)
    console.log(auth.currentUser)
    const handleLogOut = () => {
        signOut(auth)
        window.location.href = "/"
    }

    return (
        <Fragment>
            <div className={styles.headerContainer}>
                <BrandLogo className={styles.brandColor} />
                {
                    <Button className={styles.logOutBtn} event={handleLogOut} type='button' children="Log out" />
                }
            </div>
        </Fragment>
    );
}

export default Header;