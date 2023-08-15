import styles from './LoginForm.module.css'

// imported hooks
import { useEffect, useState } from "react";

// imported components
import MySkeleton from '../../UI/MySkeleton/MySkeleton.component';
import Login from '../Login/Login.component'
function LoginForm() {
    const [ImgLink, setImgLink] = useState('')
    useEffect(function () {
        const FetchingPoster = async () => {
            try {
                const res = await fetch("https://i.ibb.co/rsz034B/phone-img.jpg")
                setImgLink(res.url)
            }
            catch (error) {
                console.log(error)
            }
        }
        FetchingPoster()
    }, [])

    return (
        <div className={styles.container}>
            {
                !ImgLink ? <MySkeleton /> : <div><img className={styles.poster} src={ImgLink} alt="poster" /></div>
            }
            <Login />
        </div>
    );
}

export default LoginForm;