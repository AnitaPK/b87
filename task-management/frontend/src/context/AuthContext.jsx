
import {
    createContext,
    useContext,
    useEffect,
    useState
} from 'react'

import API from '../services/api'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [loading, setLoading] = useState(true)

    const isAuthenticated = !!token

    // Login API - Get JWT Token
    const login = async (formData) => {

        const response = await API.post('/api/user/login', formData)

        const accessToken = response.data.token

        if (!accessToken) {
            throw new Error('Token not received')
        }

        localStorage.setItem('token', accessToken)
        setToken(accessToken)

        return response.data
    }

    // Get User Info API - Protected Route
    const getUserInfo = async () => {

        const response = await API.get('/api/user/getUserInfo')

        const userData = response.data.user

        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))

        return userData
    }

    // Register API
    const register = async (formData) => {

        const response = await API.post('/api/user/register', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }})

        return response.data
    }

    // Logout
    const logout = () => {

        localStorage.removeItem('token')
        localStorage.removeItem('user')

        setToken(null)
        setUser(null)
    }

    // Check authentication after refresh
    useEffect(() => {

        const checkAuth = async () => {

            const savedToken = localStorage.getItem('token')

            if (savedToken) {
                try {
                    await getUserInfo()
                } catch (error) {
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')

                    setToken(null)
                    setUser(null)
                }
            }

            setLoading(false)
        }

        checkAuth()

    }, [])

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                isAuthenticated,
                login,
                register,
                getUserInfo,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
