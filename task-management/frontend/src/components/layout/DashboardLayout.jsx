
import React from 'react'
import AdminSidebar from './AdminSidebar'
import UserSidebar from './UserSidebar'
import Header from './Header'

const DashboardLayout = ({ role, children }) => {
    return (
        <div className="dashboard-wrapper">
            {role === 'admin' ? (
                <AdminSidebar />
            ) : (
                <UserSidebar />
            )}

            <div className="dashboard-main">
                <Header />

                <main className="dashboard-content">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout
