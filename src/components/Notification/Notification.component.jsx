import style from './Notification.module.css'

// imported components
import NotificationItem from "./NotificationItem/NotificationItem.component"
import InfoTab from "../../UI/InfoTab/InfoTab.component"
const Notification = ({ Condition }) => {
    return (
        <InfoTab className={`${style.notification} ${Condition ? style.active : ''}`}>
            <h1>Notification</h1>
            <NotificationItem notificationType={'follow'} />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
        </InfoTab>
    )
}


export default Notification
