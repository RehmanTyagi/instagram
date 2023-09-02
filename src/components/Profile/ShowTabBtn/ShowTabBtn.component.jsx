import style from './ShowTabBtn.module.css'
import { NavLink } from "react-router-dom"
const ShowTabBtn = ({ url, icon, className, text }) => {
    return (
        <NavLink to={url} className={`${style.showTabBtn} ${className}`}>{icon} {text}</NavLink>
    )
}

export default ShowTabBtn
