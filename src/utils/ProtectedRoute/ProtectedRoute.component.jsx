import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/UserContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
    const { currentUser: userLoggedIn } = useAuth()
    // console.log("currentUser", userLoggedIn)
    const navigate = useNavigate()

    useEffect(function () {
        if (!userLoggedIn) {
            navigate('/')
        }
    }, [userLoggedIn, navigate])

    return <div>{children}</div>
}

export default ProtectedRoute
