import style from './Dashboard.module.css'

import SideBar from "../components/SideBar/SideBar.component"
import Profile from "../components/Profile/Profile.component"
import CreatePost from "../components/CreatePost/CreatePost.component"

function Dashboard() {
    return (
        <div className={style.dashboard}>
            <SideBar />
            <Profile />
            <CreatePost />
        </div>
    )
}

export default Dashboard