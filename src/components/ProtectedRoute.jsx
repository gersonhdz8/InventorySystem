import { Navigate, Route } from "react-router-dom";
import Cookies from "js-cookie";
import PropTypes from "prop-types";


const ProtectedRoute = ({role, ...props}) => {
    
    const token = Cookies.get("jwt");

    // Verifica si el usuario tiene un token JWT válido
    if (!token) {
        return <Navigate to="/login" />;
    }
    // Verifica si el usuario tiene el rol requerido para acceder a la ruta
    if (role === 'client') {
        
        return <Navigate to="/clientView" />;
    }
    else if (role === 'admin') {        
        return <Navigate to="/adminView" />;
    }
    else if (role === 'superadmin')
    {
        return <Navigate to="/superadminView" />;
    }

    // Si pasa todas las verificaciones, permite el acceso a la ruta
    return <Route {...props} />;
};

// Especifica la validación de tipo para la prop 'role'
ProtectedRoute.propTypes = {
    role: PropTypes.string.isRequired, // Cambia el tipo según tus necesidades
};

export default ProtectedRoute;
