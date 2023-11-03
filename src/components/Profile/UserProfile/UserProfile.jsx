import style from './UserProfile.module.css'
import { Skeleton } from 'react-skeleton-generator'
import { useAuth } from '../../../contexts/UserContext'
import { loggedUserDoc } from '../../../services/firebase'
import { useEffect, useState } from "react"
import { createContext, useContext } from "react"

const UserProfileContext = createContext()

const UserProfile = ({ children }) => {
    const { currentUser } = useAuth()
    const [userData, setUserData] = useState({})
    const { fullName, followers, following, posts, description, userProfilePicture } = userData
    useEffect(function () {
        setTimeout(() => {
            if (currentUser)
                loggedUserDoc(currentUser.uid).then((data) => setUserData(data))
        }, 2000);
    }, [currentUser])
    return <UserProfileContext.Provider value={{ fullName, followers, following, posts, description, userProfilePicture }}>{children}</UserProfileContext.Provider>
}

const Avatar = ({ className, skeletonHeight, skeletonWidth }) => {
    const { userProfilePicture } = useContext(UserProfileContext)
    return userProfilePicture ? <img className={`${style.userAvatar} ${className}`} src={userProfilePicture} alt="avatar" />
        : <div className={`${style.userAvatar} ${className}`}><Skeleton.SkeletonThemeProvider >
            <Skeleton width={`${skeletonWidth}px`} height={`${skeletonHeight}px`} borderRadius="50%" />
        </Skeleton.SkeletonThemeProvider></div>

}

const UserName = ({ className }) => {
    const { fullName } = useContext(UserProfileContext)
    return fullName ? <h1 className={className}>{fullName}</h1> : <Skeleton.SkeletonThemeProvider><Skeleton width="200px" height="25px" /></Skeleton.SkeletonThemeProvider>
}

const UserStatstics = ({ className }) => {
    const { posts, followers, following } = useContext(UserProfileContext)
    return followers ? <div className={className} >
        <span><span>{posts?.length}</span> Posts </span>
        <span><span>{followers?.length}</span> Followers </span>
        <span><span>{following?.length}</span> Following </span>
    </div> : <Skeleton.SkeletonThemeProvider><Skeleton width="100%" height="30px" /></Skeleton.SkeletonThemeProvider>
}

const UserDescription = ({ className }) => {
    const { description } = useContext(UserProfileContext)
    return description ? <div className={className}>{description}</div> : <Skeleton.SkeletonThemeProvider><Skeleton width="100%" count={5} height="10px" /></Skeleton.SkeletonThemeProvider>
}

UserProfile.Avatar = Avatar
UserProfile.UserName = UserName
UserProfile.UserStatstics = UserStatstics
UserProfile.UserDescription = UserDescription

export default UserProfile