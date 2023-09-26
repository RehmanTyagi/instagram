import style from './NotificationItem.module.css'

// imported comopnents
import Button from '../../../UI/Button/Button.component'
const NotificationItem = ({ notificationType }) => {
    if (notificationType === 'follow')
        return (
            <div className={style.notificationItem}>
                <img className={style.avatar} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="Avatar" />
                <span><span className={style.userName}>{'UserName'}</span> Started {'Following'} you. <span className={style.time}>{'time ago'}</span>.</span>
                <Button children={'Follow'} type='button' />
            </div>
        )
    if (notificationType === 'like')
        return (
            <div className={style.notificationItem}>
                <img className={style.avatar} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="Avatar" />
                <span><span className={style.userName}>{'UserName'}</span> Liked your post. <span className={style.time}>{'time ago'}</span>.</span>
                <img className={style.postImg} src="" alt="postImg" />
            </div>
        )
    if (notificationType === 'dislike')
        return (
            <div className={style.notificationItem}>
                <img className={style.avatar} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="Avatar" />
                <span><span className={style.userName}>{'UserName'}</span> Dislike your post. <span className={style.time}>{'time ago'}</span>.</span>
                <img className={style.postImg} src="" alt="postImg" />
            </div>
        )
}

export default NotificationItem
