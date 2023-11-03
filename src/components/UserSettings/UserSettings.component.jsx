import style from './UserSettings.module.css'
import Input from '../../UI/Input/Input.component'
import Button from '../../UI/Button/Button.component'
import UserProfile from "../Profile/UserProfile/UserProfile"
const UserSettings = () => {
    return (
        <div className={style.settings}>
            <p className={style.heading}>Edit Profile</p>
            <form className={style.content}>
                <div className={style.profilePicture}>
                    <UserProfile><UserProfile.Avatar skeletonHeight={100} skeletonWidth={100} className={style.userAvatar} /></UserProfile>
                    <Button type='button' children='Change Profile Picture' />
                </div>
                <div className={style.username}>
                    <p>Change Username:</p>
                    <Input placeholder="enter username" />
                </div>
                <div className={style.userWebsite}>
                    <p>Website Link:</p>
                    <Input placeholder="enter web link" />
                    <p>Editing your links is only available on Web App. Visit the Instagram app and edit your profile does not gonna work.</p>
                </div>
                <div className={style.userWebsite}>
                    <p>Bio:</p>
                    <textarea rows="5" placeholder="Bio" />
                </div>
                <Button type="submit" children="Submit" />
            </form>
        </div>
    )
}

export default UserSettings
