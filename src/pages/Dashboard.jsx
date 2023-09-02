
import SideBar from "../components/SideBar/SideBar.component"
import Profile from "../components/Profile/Profile.component"

function Dashboard() {
    return (
        <div style={{ height: "100vh", display: "grid", placeItems: "flex-end" }}>
            <SideBar />
            <Profile />
        </div>
    )
}

export default Dashboard