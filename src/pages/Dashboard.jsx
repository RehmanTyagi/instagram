import style from './Dashboard.module.css';

// imported components
import SideBar from "../components/SideBar/SideBar.component";
import CreatePost from "../components/CreatePost/CreatePost.component";

// imported hooks
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(function () {
        document.title = 'SocialGram'
    }, [])
    return (
        <div className={style.dashboard}>
            <SideBar setIsModalOpen={setIsModalOpen} />
            <CreatePost isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <Outlet />
        </div>
    );
}

export default Dashboard;