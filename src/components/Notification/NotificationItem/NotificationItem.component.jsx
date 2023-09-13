import style from './NotificationItem.module.css'

// imported comopnents
import Button from '../../../UI/Button/Button.component'
const NotificationItem = ({ notificationType }) => {
    return (
        <div className={style.notificationItem}>
            <img className={style.avatar} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="Avatar" />
            <span>{'UserName'} Started {'Following'} you. {'time ago'}.</span>
            <Button children={'Follow'} type='button' />
        </div>
    )
}

export default NotificationItem
