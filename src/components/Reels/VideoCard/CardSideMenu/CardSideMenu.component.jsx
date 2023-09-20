import style from './CardSideMenu.module.css'

// imported icons
import { AiOutlineHeart, AiOutlineMessage, AiOutlineLink } from 'react-icons/ai'
import Avatar from '../../../Profile/Avatar/Avatar.component'
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
            <Avatar className={style.userAvatar} />
        </div>
    )
}

export default CardSideMenu
