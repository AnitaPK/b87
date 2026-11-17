import { NavLink } from "react-router-dom";

import {
    FiHome,
    FiGlobe,
    FiMapPin,
    // FiLanguages,
    FiBarChart2,
    FiActivity
} from "react-icons/fi";

const Sidebar = () => {

    const menuItems = [
        {
            title: "Dashboard",
            path: "/",
            icon: <FiHome />
        },
        {
            title: "Countries",
            path: "/countries",
            icon: <FiGlobe />
        },
        {
            title: "Cities",
            path: "/cities",
            icon: <FiMapPin />
        },
        {
            title: "Languages",
            path: "/languages",
            // icon: <FiLanguages />
        },
        {
            title: "Reports",
            path: "/reports",
            icon: <FiBarChart2 />
        }
    ];

    return (
        <aside className="sidebar">

            <div className="sidebar-brand">
                <FiActivity size={25} />
                <span>WORLD</span>
            </div>

            <div className="sidebar-menu">

                <p className="menu-heading">MAIN MENU</p>

                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === "/"}
                        className={({ isActive }) =>
                            `sidebar-link ${isActive ? "active" : ""}`
                        }
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </NavLink>
                ))}

            </div>

            <div className="sidebar-footer">
                World Statistics Dashboard
            </div>

        </aside>
    );
};

export default Sidebar;