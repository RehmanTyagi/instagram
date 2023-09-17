import style from './VideoCard.module.css'

//imported icons
import { BiVolumeMute, BiVolumeFull } from 'react-icons/bi'
import { CiPlay1 } from 'react-icons/ci'

// imported hooks
import { useState, useRef, useEffect, } from "react"
import { useInView } from "react-intersection-observer"
import { useAudio } from "../../../contexts/AudioContext"

const VideoCard = ({ url }) => {

    const [isReelPlaying, setIsReelPlaying] = useState(false)
    const reelRef = useRef(null)
    const { ref: videoRef, inView: videoIsVisible } = useInView({
        threshold: 1
    })
    const { isMuted, setIsMuted } = useAudio()

    // handle onclick play and pause
    const handlePlayPause = () => {
        if (isReelPlaying) {
            reelRef.current.pause()
            setIsReelPlaying(!isReelPlaying)
        } else {
            reelRef.current.play()
            setIsReelPlaying(!isReelPlaying)
        }
    }

    // controlling reel on change
    useEffect(function () {
        if (videoIsVisible) {
            reelRef.current.play()
            setIsReelPlaying(true)
        }
        else {
            reelRef.current.pause()
            setIsReelPlaying(false)
        }
    }, [videoIsVisible])

    // handle mute and unmute
    const handleMute = () => {
        if (reelRef.current.muted === false) setIsMuted(mute => !mute)
        else setIsMuted(false)
    }

    return (
        <div onClick={handlePlayPause} ref={videoRef} className={style.videoCard}>
            <video loop muted={isMuted} ref={reelRef} src={url} />
            {
                isMuted ? <BiVolumeMute onClick={handleMute} className={style.volumeBtn} /> : <BiVolumeFull onClick={handleMute} className={style.volumeBtn} />
            }
            {
                !isReelPlaying && <CiPlay1 className={style.playBtn} />
            }
        </div>
    )
}

export default VideoCard
