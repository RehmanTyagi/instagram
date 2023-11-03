import style from "./Profile.module.css";

// hooks
import { Fragment } from "react";

// imported components
import UserProfile from "./UserProfile/UserProfile";
import Button from "../../UI/Button/Button.component";
import ShowTabBtn from "./ShowTabBtn/ShowTabBtn.component";
import ContentBox from "../ContentBox/ContentBox.component";

// imported icons
import { CiGrid41, CiBookmarkCheck } from "react-icons/ci";
import { CgTag } from "react-icons/cg";
import MyNavLink from "../NavLink/NavLink.component";
const Profile = () => {

  return (
    <Fragment>
      {
        <div className={style.profileCard}>
          <div className={style.userInfo}>
            <UserProfile>
              <UserProfile.Avatar skeletonHeight={200} skeletonWidth={200}
                className={style.ProfilePicture} />
            </UserProfile>
            <div className={style.userActions}>
              <UserProfile><UserProfile.UserName className={style.userName} /></UserProfile>
              <MyNavLink className={style.messageBtn} link="settings" >
                <Button
                  type="button"
                  children="Edit Profile"
                />
              </MyNavLink>
            </div>
            <UserProfile><UserProfile.UserStatstics className={style.userStatstics} /></UserProfile>
            <UserProfile><UserProfile.UserDescription className={style.userDescription} /></UserProfile>
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