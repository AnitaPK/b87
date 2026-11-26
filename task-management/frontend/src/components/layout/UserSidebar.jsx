
import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    FaTachometerAlt,
    FaTasks,
    FaUser,
    FaSignOutAlt
} from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext'

const UserSidebar = () => {
    const { logout } = useAuth()

    const menuItems = [
        {
            title: 'Dashboard',
            path: '/user/dashboard',
            icon: <FaTachometerAlt />
        },
        {
            title: 'My Tasks',
            path: '/user/tasks',
            icon: <FaTasks />
        },
        {
            title: 'My Profile',
            path: '/user/profile',
            icon: <FaUser />
        }
    ]

    return (
        <aside className="dashboard-sidebar">
            <div className="sidebar-brand">
                <h4>Task Manager</h4>
                <small>User Panel</small>
            </div>

            <nav className="sidebar-menu">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/user/dashboard'}
                        className={({ isActive }) =>
                            `sidebar-link ${isActive ? 'active' : ''}`
                        }
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </NavLink>
                ))}
            </nav>

            <button
                className="sidebar-link sidebar-logout"
                onClick={logout}
            >
                <FaSignOutAlt />
                <span>Logout</span>
            </button>
        </aside>
    )
}

export default UserSidebar
