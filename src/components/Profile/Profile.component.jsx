import style from './Profile.module.css'

// imported components
import Avatar from "./Avatar/Avatar.component"
import Button from "../../UI/Button/Button.component"
import ShowTabBtn from "./ShowTabBtn/ShowTabBtn.component"
import ContentBox from "../ContentBox/ContentBox.component"
// import { NavLink } from "react-router-dom"

// imported icons
import { CiGrid41, CiMenuKebab, CiBookmarkCheck } from 'react-icons/ci'
import { CgTag } from 'react-icons/cg'

const Profile = () => {
    return (
        <div className={style.profileCard}>
            <div className={style.userInfo}>
                <Avatar className={style.ProfilePicture} inlineStyle={{ height: "150px", width: "150px" }} />
                <div className={style.userActions}>
                    <p className={style.userName}>Rehmann Chaudhary</p>
                    <Button type='button' children='Follow' />
                    <Button className={style.messageBtn} type='button' children='Message' />
                    <CiMenuKebab className={style.moreOption} />
                </div>
                <div className={style.userStatstics}>
                    <span><span>25</span> Posts</span>
                    <span><span>25</span> Followers</span>
                    <span><span>25</span> Following</span>
                </div>
                <div className={style.userDescription}>
                    Rehmann Tyagi
                    Artist Rehmann Chaudhary born to create history.
                    Rehmann's info:
                    Age: 20
                    Height: 5'7
                    Interested: acting, singing, dancing, business and technology
                </div>
            </div>
            <div className={style.userContent}>
                <div className={style.tabBtns}>
                    <ShowTabBtn url={'profile/posts'} text='posts' icon={<CiGrid41 />} />
                    <ShowTabBtn url={'profile/reels'} text='Reels' icon={<CiBookmarkCheck />} />
                    <ShowTabBtn url={'profile/tagged'} text='tagged' icon={<CgTag />} />
                </div>
                <ContentBox />
            </div>
        </div>
    )
}

export default Profile
