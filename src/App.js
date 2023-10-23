// imported components
import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import LazzyLoader from "./UI/LoadingSpinner/LoadingSpinner.component";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./utils/ProtectedRoute/ProtectedRoute.component";

// imported contexts
import { AudioProvider } from "./contexts/AudioContext";
import { AuthContextProvider } from "./contexts/UserContext";

// dashboard features
import Profile from './components/Profile/Profile.component';
import Reels from "./components/Reels/Reels.component";
import Posts from "./components/Profile/UserPosts/Posts.component";
import UserSettings from "./components/UserSettings/UserSettings.component";
import UserActivity from "./components/UserActivity/UserActivity.component";
import UserSaved from "./components/Profile/UserSaved/UserSaved.component";
import UserReels from "./components/Profile/UserReels/UserReels.component";

// Site Pages
const LoginPage = lazy(() => import('./pages/LoginPage'));
const DashboardPage = lazy(() => import('./pages/Dashboard'));
const SignUpPage = lazy(() => import('./pages/SignUpPage.jsx'));
const ForgetPage = lazy(() => import('./pages/ForgotPasswordPage'));
const NotFoundPage = lazy(() => import('./pages/404.page'));

function App() {
  return (
    <AuthContextProvider>
      <AudioProvider>
        <ToastContainer className="toast" />
        <Suspense fallback={<LazzyLoader><LazzyLoader.LargeLoadingSpinner /><LazzyLoader.BackDrop /></LazzyLoader>}>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="forgot_password" element={<ForgetPage />} />
            <Route path="sign_up" element={<SignUpPage />} />
            <Route path="dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>}>
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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </AudioProvider>
    </AuthContextProvider>
  );
}

export default App;
