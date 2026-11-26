
import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'

const UserDashboard = () => {
    return (
        <DashboardLayout role="user">
            <h3 className="mb-4">My Dashboard</h3>

            <div className="row g-3">
                <div className="col-md-4">
                    <div className="card shadow-sm p-4">
                        <h6>My Total Tasks</h6>
                        <h2>8</h2>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm p-4">
                        <h6>Pending Tasks</h6>
                        <h2>3</h2>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm p-4">
                        <h6>Completed Tasks</h6>
                        <h2>5</h2>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default UserDashboard
