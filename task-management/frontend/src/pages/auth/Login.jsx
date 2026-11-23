
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../context/AuthContext'

const Login = () => {

    const navigate = useNavigate()
const { login, getUserInfo } = useAuth()
    

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }


const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        setLoading(true)

        // Step 1: Login API - Get Token
        await login(formData)

        // Step 2: Protected API - Get User Information
        const user = await getUserInfo()

        toast.success('Login successful!')

        // Step 3: Role-based redirection
        if (user.role === 'admin') {
            navigate('/admin/dashboard', { replace: true })
        } else if (user.role === 'user') {
            navigate('/user/dashboard', { replace: true })
        } else {
            toast.error('Invalid user role')
        }

    } catch (error) {

        toast.error(
            error.response?.data?.msg ||
            error.message ||
            'Login failed'
        )

    } finally {
        setLoading(false)
    }
}

    return (
        <div className="container w-50 mt-5">
            <div className="card auth-card shadow">
                <div className="card-body p-4 p-md-5">

                    <h2 className="text-center fw-bold mb-2">
                        Welcome Back
                    </h2>

                    <p className="text-center text-muted mb-4">
                        Login to your account
                    </p>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>

                    </form>

                    <p className="text-center mt-4 mb-0">
                        Don't have an account?{' '}
                        <Link to="/register">Register</Link>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Login
