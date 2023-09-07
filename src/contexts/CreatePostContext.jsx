import { createContext, useContext, useState } from "react";

const CreatePostContext = createContext()

function CreatePostProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleModal = (e) => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }

    return <CreatePostContext.Provider value={{ isOpen, setIsOpen, handleModal }}>{children}</CreatePostContext.Provider>

}

function useCreatePost() {
    const context = useContext(CreatePostContext)
    return context
}

export { CreatePostProvider, useCreatePost };