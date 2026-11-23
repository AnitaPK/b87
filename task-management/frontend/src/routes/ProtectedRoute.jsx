
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Loader from '../components/common/Loader'

const ProtectedRoute = ({ allowedRoles }) => {

    const { user, isAuthenticated, loading } = useAuth()

    // Wait until authentication check completes
    if (loading) {
        return <Loader />
    }

    // If user is not logged in
    if (!isAuthenticated || !user) {
        return <Navigate to="/login" replace />
    }

    // Check user role
    if (!allowedRoles.includes(user.role)) {

        if (user.role === 'admin') {
            return <Navigate to="/admin/dashboard" replace />
        }

        return <Navigate to="/user/dashboard" replace />
    }

    return <Outlet />
}

export default ProtectedRoute
