import { FiSearch, FiBell, FiUser } from "react-icons/fi";

const Navbar = () => {

    return (
        <nav className="dashboard-navbar">

            <div>
                <h5 className="mb-0">World Analytics</h5>
                <small className="text-muted">
                    Explore global statistics
                </small>
            </div>

            <div className="d-flex align-items-center gap-3">

                <button className="btn btn-light">
                    <FiSearch />
                </button>

                <button className="btn btn-light">
                    <FiBell />
                </button>

                <div className="user-profile">
                    <FiUser />
                    <span>Admin</span>
                </div>

            </div>

        </nav>
    );
};

export default Navbar;