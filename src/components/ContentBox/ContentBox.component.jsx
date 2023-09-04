import style from './ContentBox.module.css'
import { Outlet } from "react-router-dom"

const ContentBox = () => {
    return (
        <div className={style.contentBox}>
            <Outlet />
        </div>
    )
}

export default ContentBox
