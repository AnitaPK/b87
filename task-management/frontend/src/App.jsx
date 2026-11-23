
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

import AdminDashboard from './pages/admin/AdminDashboard'
import UserDashboard from './pages/user/UserDashboard'

import ProtectedRoute from './routes/ProtectedRoute'
import PublicRoute from './routes/PublicRoute'

import { ToastContainer } from 'react-toastify'

const App = () => {

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/* Public Routes */}
                    <Route element={<PublicRoute />}>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/register"element={<Register />} />
                    </Route>


                    {/* Admin Protected Routes */}

                    <Route element={
                        <ProtectedRoute allowedRoles={['admin']} />}>

                        <Route
                            path="/admin/dashboard" element={<AdminDashboard />}
                        />

                    </Route>


                    {/* User Protected Routes */}

                    <Route element={
                        <ProtectedRoute allowedRoles={['user']} />
                    }>

                        <Route
                            path="/user/dashboard"  element={<UserDashboard />}
                        />

                    </Route>


                    {/* Default Route */}

                    <Route
                        path="/"
                        element={<Navigate to="/login" replace />}
                    />

                    {/* Invalid Route */}

                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />

                </Routes>

                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                />

            </BrowserRouter>

        </AuthProvider>

    )
}

export default App
