import { useContext, createContext, useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { firebase } from "../lib/firebase";

const AuthContext = createContext(null)

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('authUser')))

    useEffect(function () {
        const subscribe = () => getAuth(firebase).onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user)
                localStorage.setItem("authUser", JSON.stringify(user))
            } else {
                setCurrentUser(null)
                localStorage.removeItem('authUser')
            }
        })

        return () => subscribe()
    }, [currentUser])

    return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>
}

const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}

export { AuthContextProvider, useAuth }