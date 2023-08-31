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
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="forgot_password" element={<ForgotPasswordPage />} />
            <Route path="sign_up" element={<SignUpForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
