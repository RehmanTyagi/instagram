import style from './Dashboard.module.css'

import SideBar from "../components/SideBar/SideBar.component"
import Profile from "../components/Profile/Profile.component"

function Dashboard() {
    return (
        <div className={style.dashboard}>
            <SideBar />
            <Profile />
        </div>
    )
}

export default Dashboard