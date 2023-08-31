import styles from './ToastNotification.module.css'
import { AiOutlineCheck, AiOutlineClose, AiOutlineWarning, AiFillCloseCircle } from 'react-icons/ai'
import { useState } from "react"
function ToastNotification({ message, type, onClose }) {
    const [showToast, setShowToast] = useState(true)
    const iconList = {
        success: <AiOutlineCheck />,
        fail: <AiOutlineClose />,
        warning: <AiOutlineWarning />
    }

    const toastIcon = iconList[type] || null
    return (
        <>
            {
                showToast &&
                <div className={styles.toastContainer}>
                    {
                        toastIcon && <span className={styles.toastIcon}>{toastIcon}</span>
                    }
                    <span className={styles.message}>{message}</span>
                    <span onClick={() => setShowToast(onClose)} className={styles.closeToaster}><AiFillCloseCircle /></span>
                </div>
            }
        </>
    )
}

export default ToastNotification