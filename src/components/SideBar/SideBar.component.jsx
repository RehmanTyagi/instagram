import styles from "./SideBar.module.css";

// imported components
import MyNavLink from "../NavLink/NavLink.component";
import UserPanel from "../UserPanel/UserPanel.component";
import Notification from "..//Notification/Notification.component";

// imported icons
import HomeIcon from "../../assets/icons/homeIcon";
import SearchIcon from "../../assets/icons/searchIcon";
import ExploreIcon from "../../assets/icons/exploreIcon";
import ReelsIcon from "../../assets/icons/reelsIcon";
import NotificationIcon from "../../assets/icons/notificationIcon";
import CreatePostIcon from "../../assets/icons/createPostIcon";
import Avatar from "../Profile/Avatar/Avatar.component";
import BrandLogo from "../../UI/Logo/Logo.compnent";

// imported hooks
import { useState, Fragment } from "react";

function SideBar({ setIsModalOpen }) {
  const [isTextShow, setIsTextShow] = useState(false);

  const handleCreatePost = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const handleNotification = (e) => {
    e.preventDefault();
    setIsTextShow(!isTextShow);
  };

  return (
    <Fragment>
      <div className={`${styles.sideBar} ${styles.fullSideBar}`}>
        {!isTextShow && <BrandLogo className={styles.sideBarLogo} />}
        <div className={styles.linkContainer}>
          <MyNavLink className={styles.link} link="home">
            <HomeIcon />
            <p className={styles.linkText}>Home</p>
          </MyNavLink>
          <MyNavLink className={styles.link} link="search">
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
            className={`${styles.link} ${isTextShow && "active"}`}
            link="notifications"
          >
            <NotificationIcon />
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
        <Notification Condition={isTextShow} />
      </div>
    </Fragment>
  );
}

export default SideBar;
