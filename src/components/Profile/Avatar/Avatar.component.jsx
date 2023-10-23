import style from './Avatar.module.css'
import { Skeleton } from 'react-skeleton-generator'

const Avatar = ({ avatarURL, className, skeletonHeight, skeletonWidth }) => {
    return (
        <>
            {
                avatarURL ? <img className={`${style.userAvatar} ${className}`} src={avatarURL} alt="avatar" />
                    : <div className={`${style.userAvatar} ${className}`}><Skeleton.SkeletonThemeProvider >
                        <Skeleton width={`${skeletonWidth}px`} height={`${skeletonHeight}px`} borderRadius="50%" />
                    </Skeleton.SkeletonThemeProvider></div>
            }
        </>
    )
}

export default Avatar