import styles from './SideBar.module.css'

// imported components
import MyNavLink from "../NavLink/NavLink.component"
import UserPanel from "../UserPanel/UserPanel.component"

// imported icons
import CreatePostIcon from "../../assets/icons/createPostIcon"
import exploreIcon from "../../assets/icons/exploreIcon"
import messageIcon from "../../assets/icons/MessagesIcon"
import reelsIcon from "../../assets/icons/reelsIcon"
import homeIcon from '../../assets/icons/homeIcon'
import searchIcon from '../../assets/icons/searchIcon'
import notificationIcon from '../../assets/icons/notificationIcon'
import Avatar from "../Profile/Avatar/Avatar.component"
function SideBar() {
    return (
        <div className={styles.sideBar}>
            <span></span>
            <div className={styles.linkContainer}>
                <MyNavLink className={styles.link} IconPath={homeIcon} text="Home" />
                <MyNavLink className={styles.link} IconPath={searchIcon} text="Search" />
                <MyNavLink className={styles.link} link='explore' IconPath={exploreIcon} text="Explore" />
                <MyNavLink className={styles.link} IconPath={reelsIcon} text="Reels" />
                <MyNavLink className={styles.link} IconPath={messageIcon} text="Messages" />
                <MyNavLink className={styles.link} IconPath={notificationIcon} text="Notification" />
                <MyNavLink className={styles.link} IconPath={CreatePostIcon} text="Create" />
                <MyNavLink className={styles.link} IconPath={<Avatar inlineStyle={{ height: "30px", width: "30px", border: "3px solid black" }} />} text="Profile" />
            </div>
            <UserPanel className={styles.link} />
        </div>
    )
}

export default SideBar