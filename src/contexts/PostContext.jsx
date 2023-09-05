import { createContext, useContext, useEffect } from "react";

const PostsContext = createContext()

function PostProvider({ children }) {

    useEffect(function () {

    }, [])

    return <PostsContext.Provider value={''}>{children}</PostsContext.Provider>
}

function usePosts() {
    const context = useContext(PostsContext)
    return context
}

export { PostProvider, usePosts }