import styles from './LoginForm.module.css'

// imported hooks
import { useEffect, useState } from "react";
// imported icons
import SmartPhoneIcon from '../../assets/images/phone-img.jpg'
// imported components
import MySkeleton from "../MySkeleton/MySkeleton.component";
import Login from '../Login/Login.component'
function LoginForm() {
    const [posterLoading, setPosterLoading] = useState(true)
    useEffect(function () {
        setTimeout(() => setPosterLoading(false), 3000)
    }, [])

    return (
        <div className={styles.container}>
            {
                posterLoading ? <MySkeleton /> : <div><img className={styles.poster} src={SmartPhoneIcon} alt="poster" /></div>
            }
            <Login />
        </div>
    );
}

export default LoginForm;