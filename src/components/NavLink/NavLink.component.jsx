import style from './NavLink.module.css'
import { NavLink } from "react-router-dom"
import { forwardRef } from "react"

const MyNavLink = forwardRef(({ link, IconPath, text, className, onClick }, ref) => {
    return (
        <NavLink ref={ref} onClick={onClick} className={`${style.navLink} ${className}`} to={link}> {IconPath}{text}</NavLink>
    )
})

export default MyNavLink