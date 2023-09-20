import style from './Reels.module.css'

import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import VideoCard from "./VideoCard/VideoCard.component"

const sampleVideos = [video1, video2, video1, video2]
// imported components
const Reels = ({ isScrollable }) => {
    return (
        <div className={isScrollable ? style.scrollableVideoContainer : style.VideoContainer}>
            {
                sampleVideos.map((VideoUrl, index) => <VideoCard url={VideoUrl} key={index} ShowOptions={true} autoPlay={true} />)
            }
        </div>
    )
}

export default Reels
