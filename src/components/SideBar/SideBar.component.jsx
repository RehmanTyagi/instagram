import styles from './SideBar.module.css'

// imported components
import MyNavLink from "../NavLink/NavLink.component"
import UserPanel from "../UserPanel/UserPanel.component"
import Notification from "..//Notification/Notification.component"

// imported icons
import CreatePostIcon from "../../assets/icons/createPostIcon"
import exploreIcon from "../../assets/icons/exploreIcon"
import messageIcon from "../../assets/icons/MessagesIcon"
import reelsIcon from "../../assets/icons/reelsIcon"
import homeIcon from '../../assets/icons/homeIcon'
import searchIcon from '../../assets/icons/searchIcon'
import NotificationIcon from '../../assets/icons/notificationIcon'
import Avatar from "../Profile/Avatar/Avatar.component"
import BrandLogo from "../../UI/Logo/Logo.compnent"

// imported hooks
import { useState } from "react"

function SideBar({ setIsModalOpen }) {
    const [isTextShow, setIsTextShow] = useState(false)

    const handleCreatePost = (e) => {
        e.preventDefault()
        setIsModalOpen(true)
    }
    const handleNotification = (e) => {
        e.preventDefault()
        setIsTextShow(!isTextShow)
    }

    return (
        <>
            <div className={`${styles.sideBar} ${!isTextShow ? styles.fullSideBar : styles.miniSideBar}`}>
                <span></span>
                <div className={styles.linkContainer}>
                    {
                        !isTextShow && <BrandLogo />
                    }
                    <MyNavLink className={styles.link} IconPath={homeIcon} text={`${!isTextShow ? 'Home' : ''}`} link="home" />
                    <MyNavLink className={styles.link} IconPath={searchIcon} text={`${!isTextShow ? 'Search' : ''}`} link="search" />
                    <MyNavLink className={styles.link} IconPath={exploreIcon} text={`${!isTextShow ? 'Explore' : ''}`} link='explore' />
                    <MyNavLink className={styles.link} IconPath={reelsIcon} text={`${!isTextShow ? 'Reels' : ''}`} link="reels" />
                    <MyNavLink className={styles.link} IconPath={messageIcon} text={`${!isTextShow ? 'Message' : ''}`} link="inbox" />
                    <MyNavLink onClick={handleNotification} className={styles.link} IconPath={<NotificationIcon className={`${styles.icon} ${isTextShow ? 'active' : ''}`} />} text={`${!isTextShow ? 'Notification' : ''}`} link="notifications" />
                    <MyNavLink onClick={handleCreatePost} className={styles.link} IconPath={CreatePostIcon} text={`${!isTextShow ? 'Create' : ''}`} link="createPost" />
                    <MyNavLink className={styles.link} IconPath={<Avatar inlineStyle={{ height: "30px", width: "30px", border: "3px solid black" }} />} text={`${!isTextShow ? 'Profile' : ''}`} link="profile" />
                </div>
                <UserPanel className={styles.link} />
                <Notification Condition={isTextShow} />
            </div>
        </>
    )
}

export default SideBar