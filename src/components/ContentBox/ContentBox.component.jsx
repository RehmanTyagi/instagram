import style from './ContentBox.module.css'
import { Outlet } from "react-router-dom"
// import VideoCard from '../Reels/VideoCard/VideoCard.component'
// import Video1 from '../../assets/video1.mp4'

const ContentBox = () => {
    return (
        <div className={style.contentBox}>
            <Outlet />
            {
                //            <VideoCard url={Video1} />
            }        </div>
    )
}

export default ContentBox
