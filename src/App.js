// imported components
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Site Pages
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
// import Header from "./components/Header/Header.component";
import SignUpForm from "./components/SignUpForm/SignUpForm.component";
import NotFoundPage from "./pages/404.page";
import Dashboard from './pages/Dashboard'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="posts" element={<h1>Posts</h1>} />
              <Route path="reels" element={<h1>Reels</h1>} />
            </Route>
            <Route path="forgot_password" element={<ForgotPasswordPage />} />
            <Route path="sign_up" element={<SignUpForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
