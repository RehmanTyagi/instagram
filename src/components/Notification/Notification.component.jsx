import style from './Notification.module.css'

// imported icons
import {BiX}from 'react-icons/bi'

// imported components
import NotificationItem from "./NotificationItem/NotificationItem.component"
import InfoTab from "../../UI/InfoTab/InfoTab.component"
const Notification = ({ isTextShow,setIsTextShow }) => {
    return (
        <InfoTab className={`${style.notification} ${isTextShow ? style.active : ''}`}>
            <div className={style.tabNavbar}>
            <h1>Notification</h1>
            <span onClick={()=>setIsTextShow(!isTextShow)}><BiX size={30} /></span>
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
