// Routes.jsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import LoginForm from './pages/LoginForm.jsx';
import RegisterForm from './pages/RegisterForm.jsx';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/userLogin" element={<LoginForm />} />
            <Route path="/userRegister" element={<RegisterForm />} />
        </Routes>
);
}
