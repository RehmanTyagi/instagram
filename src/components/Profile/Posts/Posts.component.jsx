import style from './Posts.module.css'

import VideoCard from "../../Reels/VideoCard/VideoCard.component"
import video from '../../../assets/video1.mp4'
import video2 from '../../../assets/video2.mp4'
import img from '../../../assets/not-found-gif.gif'
const Posts = () => {
    return (
        <div className={style.postsContainer}>
            <VideoCard className={style.postItem} url={video} />
            <VideoCard className={style.postItem} url={video2} />
            <VideoCard className={style.postItem} url={video} />
            <VideoCard className={style.postItem} url={video} />
            <VideoCard className={style.postItem} url={video} />
            <VideoCard className={style.postItem} url={video} />
            <img className={style.postItem} src={img} alt="img" />
        </div>
    )
}

export default Posts
