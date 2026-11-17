const StatCard = ({ title, value, icon, description }) => {

    return (
        <div className="card stat-card border-0 shadow-sm">

            <div className="card-body">

                <div className="d-flex justify-content-between">

                    <div>
                        <p className="text-muted mb-2">{title}</p>

                        <h3 className="fw-bold mb-1">
                            {value}
                        </h3>

                        <small className="text-muted">
                            {description}
                        </small>
                    </div>

                    <div className="stat-icon">
                        {icon}
                    </div>

                </div>

            </div>

        </div>
    );
};

export default StatCard;