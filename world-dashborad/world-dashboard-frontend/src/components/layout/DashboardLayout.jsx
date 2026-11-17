import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = () => {

    return (
        <div className="dashboard-wrapper">

            <Sidebar />

            <main className="main-content">

                <Navbar />

                <div className="page-content">
                    <Outlet />
                </div>

            </main>

        </div>
    );
};

export default DashboardLayout;