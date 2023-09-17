// imported components
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Site Pages
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import NotFoundPage from "./pages/404.page";
import SignUpForm from "./components/SignUpForm/SignUpForm.component";
import Dashboard from './pages/Dashboard'
import Profile from './components/Profile/Profile.component'
import Reels from "./components/Reels/Reels.component";

import { AudioProvider } from "./contexts/AudioContext";
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <AudioProvider>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="reels" element={<Reels />} />
              <Route index element={<Navigate to='profile/posts' />} />
              <Route path="profile" element={<Navigate to='posts' />} />
              <Route element={<Profile />}>
                <Route path="profile/posts" element={<h1>Posts</h1>} />
                <Route path="profile/reels" element={<h1>Reels</h1>} />
                <Route path="profile/tagged" element={<h1>tagged</h1>} />
              </Route>
            </Route>
            <Route path="forgot_password" element={<ForgotPasswordPage />} />
            <Route path="sign_up" element={<SignUpForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AudioProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
