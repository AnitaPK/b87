
import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'

const AdminDashboard = () => {
    return (
        <DashboardLayout role="admin">
            <h3 className="mb-4">Admin Dashboard</h3>

            <div className="row g-3">
                <div className="col-md-4">
                    <div className="card shadow-sm p-4">
                        <h6>Total Tasks</h6>
                        <h2>25</h2>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm p-4">
                        <h6>Assigned Tasks</h6>
                        <h2>18</h2>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm p-4">
                        <h6>Total Users</h6>
                        <h2>12</h2>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default AdminDashboard
