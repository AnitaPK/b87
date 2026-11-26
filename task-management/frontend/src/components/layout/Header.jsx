
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext'

const Header = () => {
    const { user } = useAuth()

    return (
        <header className="dashboard-header">
            <div>
                <h5 className="mb-0">Welcome, {user?.name || 'User'}</h5>
                <small className="text-muted">
                    {user?.role === 'admin' ? 'Administrator' : 'User'}
                </small>
            </div>

            <div className="d-flex align-items-center gap-2">
                {user?.profileImage ? (
                    <img
                        src={user.profileImage}
                        alt="Profile"
                        className="header-profile-image"
                    />
                ) : (
                    <FaUserCircle size={30} />
                )}

                <span>{user?.name}</span>
            </div>
        </header>
    )
}

export default Header
