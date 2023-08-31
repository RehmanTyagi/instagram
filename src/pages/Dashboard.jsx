
import SideBar from "../components/SideBar/SideBar.component"
import Profile from "../components/Profile/Profile.component"

function Dashboard() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "250px 1fr", height: "100vh" }}>
            <SideBar />
            <Profile />
        </div>
    )
}

export default Dashboard