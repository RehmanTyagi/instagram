import style from './CardSideMenu.module.css'

// imported icons
import { AiOutlineHeart, AiOutlineMessage, AiOutlineLink } from 'react-icons/ai'
import UserProfile from '../../../Profile/UserProfile/UserProfile'
const CardSideMenu = ({ className }) => {
    return (
        <div className={`${style.menu} ${className}`}>
            <div>
                <AiOutlineHeart className={style.icon} />
                <p>1299</p>
            </div>
            <div>
                <AiOutlineMessage className={style.icon} />
                <p>1299</p>
            </div>
            <AiOutlineLink className={style.icon} />
            <UserProfile><UserProfile.Avatar className={style.userAvatar} /></UserProfile>
        </div>
    )
}

export default CardSideMenu
