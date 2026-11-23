
import { useAuth } from '../../context/AuthContext'

const UserDashboard = () => {

    const { user, logout } = useAuth()

    return (
        <div className="container mt-5">

            <h2>User Dashboard</h2>

            <hr />

            <h4>Welcome, {user?.name}</h4>

            <p>Email: {user?.email}</p>

            <p>Role: {user?.role}</p>

            {user?.profileImage && (
                <img
                    src={user.profileImage}
                    alt="Profile"
                    width="100"
                    height="100"
                    className="rounded-circle"
                />
            )}

            <br />

            <button
                className="btn btn-danger mt-3"
                onClick={logout}
            >
                Logout
            </button>

        </div>
    )
}

export default UserDashboard
