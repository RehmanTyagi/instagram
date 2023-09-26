import styles from "./SideBar.module.css";

// imported components
import MyNavLink from "../NavLink/NavLink.component";
import UserPanel from "../UserPanel/UserPanel.component";
import AsideBar from "../AsideBar/AsideBar.component";
import NotificationItem from "../AsideBar/AsideBarItem/AsideBarItem.component";

// imported icons
import { BiHeart } from 'react-icons/bi'
import HomeIcon from "../../assets/icons/homeIcon";
import SearchIcon from "../../assets/icons/searchIcon";
import ExploreIcon from "../../assets/icons/exploreIcon";
import ReelsIcon from "../../assets/icons/reelsIcon";
import CreatePostIcon from "../../assets/icons/createPostIcon";
import Avatar from "../Profile/Avatar/Avatar.component";
import BrandLogo from "../../UI/Logo/Logo.compnent";

// imported hooks
import { useState, Fragment } from "react";

function SideBar({ setIsModalOpen }) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleCreatePost = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const handleNotification = (e) => {
    e.preventDefault();
    setIsNotificationOpen(!isNotificationOpen);
    setIsSearchOpen(false)
  };
  const handleSearch = (e) => {
    e.preventDefault()
    console.log('search btn hit')
    setIsSearchOpen(!isSearchOpen)
    setIsNotificationOpen(false)
  }
  console.log(styles)

  return (
    <Fragment>
      <div className={`${styles.sideBar} ${styles.fullSideBar}`}>
        <BrandLogo className={styles.sideBarLogo} />
        <div className={styles.linkContainer}>
          <MyNavLink className={styles.link} link="home">
            <HomeIcon />
            <p className={styles.linkText}>Home</p>
          </MyNavLink>
          <MyNavLink link="search" onClick={handleSearch} className={`${styles.link} ${isSearchOpen ? "active" : ""}`}>
            <SearchIcon />
            <p className={styles.linkText}>Search</p>
          </MyNavLink>
          <MyNavLink className={styles.link} link="explore">
            <ExploreIcon />
            <p className={styles.linkText}>explore</p>
          </MyNavLink>
          <MyNavLink className={styles.link} link="reels">
            <ReelsIcon />
            <p className={styles.linkText}>reels</p>
          </MyNavLink>
          <MyNavLink
            onClick={handleNotification}
            className={`${styles.link} ${isNotificationOpen ? "active" : ""}`}
            link="notifications">
            <BiHeart style={{ position: "relative", right: "3px" }} size={30} />
            <p className={styles.linkText}>Notification</p>
          </MyNavLink>
          <MyNavLink
            onClick={handleCreatePost}
            className={styles.link}
            link="createPost"
          >
            <CreatePostIcon />
            <p className={styles.linkText}>Create</p>
          </MyNavLink>
          <MyNavLink className={styles.link} link="profile">
            <Avatar inlineStyle={{ height: "30px", width: "30px" }} />
            <p className={styles.linkText}>Profile</p>
          </MyNavLink>
        </div>
        <UserPanel
          classForText={styles.linkText}
          className={`${styles.link}`}
        />
        <AsideBar heading="Notifications" isOpen={isNotificationOpen} setIsOpen={setIsNotificationOpen}>
          <NotificationItem notificationType={"follow"} />
        </AsideBar>
        <AsideBar type="search" heading="Search" isOpen={isSearchOpen} setIsOpen={setIsSearchOpen}>
        </AsideBar>
      </div>
    </Fragment>
  );
}

export default SideBar;
