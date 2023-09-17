import { createContext, useContext, useState } from "react"

const AudioContext = createContext()

const AudioProvider = ({ children }) => {
    const [isMuted, setIsMuted] = useState(true)

    return <AudioContext.Provider value={{ isMuted, setIsMuted }}>{children}</AudioContext.Provider>
}

const useAudio = () => {
    const context = useContext(AudioContext)
    return context
}


export { AudioProvider, useAudio }