// imported components
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Site Pages
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import NotFoundPage from "./pages/404.page";
import SignUpForm from "./components/SignUpForm/SignUpForm.component";
import Dashboard from './pages/Dashboard'
import Profile from './components/Profile/Profile.component'
import Reels from "./components/Reels/Reels.component";
import Posts from "./components/Profile/UserPosts/Posts.component";
import UserSettings from "./components/UserSettings/UserSettings.component";
import UserActivity from "./components/UserActivity/UserActivity.component";
import UserSaved from "./components/Profile/UserSaved/UserSaved.component";
import UserReels from "./components/Profile/UserReels/UserReels.component";

// imported contexts
import { AudioProvider } from "./contexts/AudioContext";
function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <AudioProvider>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="reels" element={<Reels isScrollable={true} />} />
              <Route path="settings" element={<UserSettings />} />
              <Route path="activity" element={<UserActivity />} />
              <Route index element={<Navigate to='profile/posts' />} />
              <Route path="profile" element={<Navigate to='posts' />} />
              <Route element={<Profile />}>
                <Route path="profile/posts" element={<Posts />} />
                <Route path="profile/reels" element={<UserReels />} />
                <Route path="profile/saved" element={<UserSaved />} />
              </Route>
            </Route>
            <Route path="forgot_password" element={<ForgotPasswordPage />} />
            <Route path="sign_up" element={<SignUpForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AudioProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
