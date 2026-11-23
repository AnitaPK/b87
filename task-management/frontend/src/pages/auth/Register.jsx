
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../context/AuthContext'

const Register = () => {

    const navigate = useNavigate()
    const { register } = useAuth()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        profileImage: null
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value, files } = e.target

        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.name.trim() ||
            !formData.email.trim() ||
            !formData.password) {
            toast.error('Please fill all required fields')
            return
        }

        try {
            setLoading(true)

            const data = new FormData()

            data.append('name', formData.name)
            data.append('email', formData.email)
            data.append('password', formData.password)

            if (formData.profileImage) {
                data.append('profileImage', formData.profileImage)
            }

            const response = await register(data)

            if (response.success) {
                toast.success(response.msg || 'Registration successful')
                navigate('/login')
            } else {
                toast.error(response.msg || 'Registration failed')
            }

        } catch (error) {
            toast.error(
                error.response?.data?.msg || 'Registration failed'
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
                        Create Account
                    </h2>

                    <p className="text-center text-muted mb-4">
                        Register for Task Management System
                    </p>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={handleChange}
                                // minLength={6}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">
                                Profile Image (Optional)
                            </label>
                            <input
                                type="file"
                                name="profileImage"
                                className="form-control"
                                accept="image/png,image/jpeg,image/jpg"
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={loading}
                        >
                            {loading ? 'Registering...' : 'Register'}
                        </button>

                    </form>

                    <p className="text-center mt-4 mb-0">
                        Already have an account?{' '}
                        <Link to="/login">Login</Link>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Register
