import { createContext, useContext, useEffect, useState } from "react"
import { getAuth } from 'firebase/auth'

const UserContext = createContext(null)

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')))

    useEffect(function () {
        const Listener = getAuth().onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser))
                setUser(authUser)
            }
            else {
                localStorage.removeItem('authUser')
                setUser(null)
            }
        })
        return () => Listener()

    }, [])

    return (
        <UserContext.Provider value={{ user }}> {children}</UserContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(UserContext)
    return context
}

export { UserContextProvider, useAuth }