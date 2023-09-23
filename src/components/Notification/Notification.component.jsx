import style from './Notification.module.css'

// imported components
import NotificationItem from "./NotificationItem/NotificationItem.component"
import InfoTab from "../../UI/InfoTab/InfoTab.component"
const Notification = ({ Condition }) => {
    return (
        <InfoTab className={`${style.notification} ${Condition ? style.active : ''}`}>
            <div className={style.tabNavbar}>
            <h1>Notification</h1>
            <span>&times;</span>
            </div>
            <NotificationItem notificationType={'follow'} />
            <NotificationItem notificationType={'follow'} />
            <NotificationItem notificationType={'follow'} />
            <NotificationItem notificationType={'follow'} />
            <NotificationItem notificationType={'like'} />
            <NotificationItem notificationType={'dislike'} />
            <NotificationItem notificationType={'like'} />
            <NotificationItem notificationType={'follow'} />
            <NotificationItem notificationType={'like'} />
        </InfoTab>
    )
}


export default Notification
