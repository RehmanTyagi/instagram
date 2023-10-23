import style from "./Profile.module.css";

// hooks
import { useAuth } from "../../contexts/UserContext";
import { useState, useEffect, Fragment } from "react";

// methods
import { loggedUserDoc } from "../../services/firebase";

// imported components
import Avatar from "./Avatar/Avatar.component";
import Button from "../../UI/Button/Button.component";
import ShowTabBtn from "./ShowTabBtn/ShowTabBtn.component";
import ContentBox from "../ContentBox/ContentBox.component";
import { Skeleton } from 'react-skeleton-generator'

// imported icons
import { CiGrid41, CiBookmarkCheck } from "react-icons/ci";
import { CgTag } from "react-icons/cg";
import MyNavLink from "../NavLink/NavLink.component";
const Profile = () => {
  const { currentUser } = useAuth()
  const [loggedUserData, setLoggedUserData] = useState({})
  const { fullName, followers, following, posts, description, userProfilePicture
  } = loggedUserData

  useEffect(function () {
    if (currentUser)
      loggedUserDoc(currentUser?.uid).then(data => setLoggedUserData(data))
  }, [currentUser])

  return (
    <Fragment>
      {
        !fullName ? <ProfileSkeleton /> :
          <div className={style.profileCard}>
            <div className={style.userInfo}>
              <Avatar skeletonHeight={200} skeletonWidth={200} avatarURL={userProfilePicture}
                className={style.ProfilePicture}
              />
              <div className={style.userActions}>
                <h1 className={style.userName}>{fullName}</h1>
                <MyNavLink className={style.messageBtn} link="settings" >
                  <Button
                    type="button"
                    children="Edit Profile"
                  />
                </MyNavLink>
              </div>
              <div className={style.userStatstics}>
                <span><span>{posts?.length}</span> Posts </span>
                <span><span>{followers?.length}</span> Followers </span>
                <span><span>{following?.length}</span> Following </span>
              </div>
              <div className={style.userDescription}>{description}</div>
            </div>
            <div className={style.userContent}>
              <div className={style.tabBtns}>
                <ShowTabBtn url={"profile/posts"} text="posts" icon={<CiGrid41 />} />
                <ShowTabBtn
                  url={"profile/reels"}
                  text="Reels"
                  icon={<CiBookmarkCheck />}
                />
                <ShowTabBtn url={"profile/saved"} text="saved" icon={<CgTag />} />
              </div>
              <ContentBox />
            </div>
          </div>
      }
    </Fragment>
  );
};

export default Profile;

const ProfileSkeleton = () => {
  return (
    <div className={style.profileCard}>
      <div className={style.userInfo}>
        <Avatar skeletonHeight={200} skeletonWidth={200}
          className={style.ProfilePicture}
        />
        <div className={style.userActions}>
          <h1 className={style.skeletonSize}>{<Skeleton.SkeletonThemeProvider><Skeleton width="150px" height="30px" /></Skeleton.SkeletonThemeProvider>}</h1>
          <Button
            className={style.messageBtn}
            type="button"
            children="Edit Profile"
          />
        </div>
        <div className={style.skeletonSize}>
          <Skeleton.SkeletonThemeProvider><Skeleton width="100%" height="40px" /></Skeleton.SkeletonThemeProvider>
        </div>
        <div className={style.skeletonSize}>
          <Skeleton.SkeletonThemeProvider><Skeleton count={5} width="100%" height="10px" /></Skeleton.SkeletonThemeProvider>
        </div>
      </div>
      <div className={style.userContent}>
        <div className={style.tabBtns}>
          <ShowTabBtn url={"profile/posts"} text="posts" icon={<CiGrid41 />} />
          <ShowTabBtn
            url={"profile/reels"}
            text="Reels"
            icon={<CiBookmarkCheck />}
          />
          <ShowTabBtn url={"profile/saved"} text="saved" icon={<CgTag />} />
        </div>
        <ContentBox />
      </div>
    </div >
  )
}