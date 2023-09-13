import style from './Dashboard.module.css'

// imported components
import SideBar from "../components/SideBar/SideBar.component"
import Profile from "../components/Profile/Profile.component"
import CreatePost from "../components/CreatePost/CreatePost.component"

// imported hooks
import { useState } from "react"

function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className={style.dashboard}>
            <SideBar setIsModalOpen={setIsModalOpen} />
            <Profile />
            <CreatePost isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
    )
}

export default Dashboard