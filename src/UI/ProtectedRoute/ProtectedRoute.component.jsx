import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/UserContext";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth()

    if (!user) {
        // if current user is not logged in then return back to login page
        return <Navigate to="/" />
    }
    return children
}

export default ProtectedRoute
