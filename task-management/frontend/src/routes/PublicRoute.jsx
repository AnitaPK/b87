
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PublicRoute = () => {

    const { user, isAuthenticated, loading } = useAuth()

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary"></div>
            </div>
        )
    }

    if (isAuthenticated && user) {

        if (user.role === 'admin') {
            return <Navigate to="/admin/dashboard" replace />
        }

        return <Navigate to="/user/dashboard" replace />
    }

    return <Outlet />
}

export default PublicRoute
