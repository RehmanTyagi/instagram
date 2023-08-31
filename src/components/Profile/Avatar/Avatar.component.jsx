import style from './Avatar.module.css'
const Avatar = ({ className, inlineStyle }) => {
    return (
        <img className={`${style.userAvatar} ${className}`} style={inlineStyle} src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1727&q=80" alt="avatar" />
    )
}

export default Avatar
