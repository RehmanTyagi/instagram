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
import BrandLogo from "../../UI/Logo/Logo.compnent"
function SideBar() {
    return (
        <div className={styles.sideBar}>
            <span></span>
            <div className={styles.linkContainer}>
                <BrandLogo />
                <MyNavLink className={styles.link} IconPath={homeIcon} text="Home" link="home" />
                <MyNavLink className={styles.link} IconPath={searchIcon} text="Search" link="search" />
                <MyNavLink className={styles.link} IconPath={exploreIcon} text="Explore" link='explore' />
                <MyNavLink className={styles.link} IconPath={reelsIcon} text="Reels" link="reels" />
                <MyNavLink className={styles.link} IconPath={messageIcon} text="Messages" link="inbox" />
                <MyNavLink className={styles.link} IconPath={notificationIcon} text="Notification" link="notifications" />
                <MyNavLink className={styles.link} IconPath={CreatePostIcon} text="Create" link="createPost" />
                <MyNavLink className={styles.link} IconPath={<Avatar inlineStyle={{ height: "30px", width: "30px", border: "3px solid black" }} />} text="Profile" link="profile" />
            </div>
            <UserPanel className={styles.link} />
        </div>
    )
}

export default SideBar