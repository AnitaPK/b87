
import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    FaTachometerAlt,
    FaTasks,
    FaClipboardList,
    FaUsers,
    FaUser,
    FaSignOutAlt
} from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext'

const AdminSidebar = () => {
    const { logout } = useAuth()

    const menuItems = [
        {
            title: 'Dashboard',
            path: '/admin/dashboard',
            icon: <FaTachometerAlt />
        },
        {
            title: 'Manage Tasks',
            path: '/admin/tasks',
            icon: <FaTasks />
        },
        {
            title: 'Assign Tasks',
            path: '/admin/assign-tasks',
            icon: <FaClipboardList />
        },
        {
            title: 'Manage Users',
            path: '/admin/users',
            icon: <FaUsers />
        },
        {
            title: 'Profile',
            path: '/admin/profile',
            icon: <FaUser />
        }
    ]

    return (
        <aside className="dashboard-sidebar">
            <div className="sidebar-brand">
                <h4>Task Manager</h4>
                <small>Admin Panel</small>
            </div>

            <nav className="sidebar-menu">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/admin/dashboard'}
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

export default AdminSidebar
