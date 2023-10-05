// Routes.jsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import LoginForm from './pages/LoginForm.jsx';
import RegisterForm from './pages/RegisterForm.jsx';
import ClientView from './pages/ClientView.jsx';
import NotFound from './pages/NotFound.jsx';
import AdminView from './pages/AdminView.jsx';
import SuperadminView from './pages/SuperadminView.jsx';
//import ProtectedRoute from './components/ProtectedRoute.jsx'; 


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/userLogin" element={<LoginForm />} />
            <Route path="/userRegister" element={<RegisterForm />} />
            <Route path="/clientView" element={<ClientView />} role="client" />
            <Route path="/adminView" element={<AdminView />} role="admin" />
            <Route path="/superadminView" element={<SuperadminView />} role="superadmin" />
            <Route path="*" element={<NotFound />}/>
        </Routes>
);
}
