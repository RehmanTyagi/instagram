import styles from "./SideBar.module.css";

// imported components
import MyNavLink from "../NavLink/NavLink.component";
import UserPanel from "../UserPanel/UserPanel.component";
import AsideBar from "../AsideBar/AsideBar.component";
import AsideBarItem from "../AsideBar/AsideBarItem/AsideBarItem.component";

// imported icons
import { BiHeart } from 'react-icons/bi';
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleCreatePost = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const handleNotification = (e) => {
    e.preventDefault();
    setIsNotificationOpen(!isNotificationOpen);
    setIsSearchOpen(false);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('search btn hit');
    setIsSearchOpen(!isSearchOpen);
    setIsNotificationOpen(false);
  };

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
        <AsideBar type="search" heading="Search" isOpen={isSearchOpen} setIsOpen={setIsSearchOpen}>
          <AsideBarItem>
            <AsideBarItem.Avatar alt="Avatar" src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'} />
            <div className={styles.asideBarItemContainer}>
              <AsideBarItem.Name>Rehmann Chaudhary</AsideBarItem.Name>
              <AsideBarItem.Text>sjdiasjdiasidjasdiiajdi</AsideBarItem.Text>
            </div>
            <AsideBarItem.Button onClick={(e) => e.target.innerHTML = 'followed'}>Follow</AsideBarItem.Button>
          </AsideBarItem>
        </AsideBar>
        <AsideBar heading="Notifications" isOpen={isNotificationOpen} setIsOpen={setIsNotificationOpen}>
          <AsideBarItem>
            <AsideBarItem.Avatar />
            <div className={styles.asideBarItemContainer}>
              <AsideBarItem.Name>Dhanush SuperStar</AsideBarItem.Name>
              <AsideBarItem.Text>has started following you.</AsideBarItem.Text>
            </div>
            <AsideBarItem.Button onClick={() => alert("login first")}>Follow</AsideBarItem.Button>
          </AsideBarItem>
        </AsideBar>
      </div>
    </Fragment>
  );
}

export default SideBar;
