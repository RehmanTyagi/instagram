import style from './Reels.module.css'

import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'

// imported components
import VideoCard from "./VideoCard/VideoCard.component"
const Reels = () => {
    return (
        <div className={style.videoContainer}>
            <VideoCard url={video1} />
            <VideoCard url={video2} />
            <VideoCard url={video1} />
        </div>
    )
}

export default Reels
