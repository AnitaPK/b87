
import React from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import { FiAlertCircle } from "react-icons/fi";


const formatNumber = (value) => {
    return Number(value || 0).toLocaleString("en-IN");
};


const PopulationChart = ({ data = [] }) => {

    return (

        <div className="card border-0 shadow-sm chart-card">

            <div className="card-body">

                {/* Chart Header */}

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>
                        <h5 className="fw-bold mb-1">
                            Top 10 Populated Countries
                        </h5>

                        <p className="text-muted small mb-0">
                            Country-wise population comparison
                        </p>
                    </div>

                    <span className="badge bg-primary">
                        Top 10
                    </span>

                </div>


                {/* Check Data */}

                {data.length === 0 ? (

                    <div className="text-center py-5 text-muted">

                        <FiAlertCircle size={30} />

                        <p className="mt-2 mb-0">
                            No country data available.
                        </p>

                    </div>

                ) : (

                    /* Population Bar Chart */

                    <ResponsiveContainer width="100%" height={400}>

                        <BarChart
                            data={data}
                            margin={{
                                top: 10,
                                right: 20,
                                left: 20,
                                bottom: 70
                            }}
                        >

                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                            />

                            <XAxis
                                dataKey="Name"
                                angle={-35}
                                textAnchor="end"
                                interval={0}
                                height={90}
                                tick={{ fontSize: 11 }}
                            />

                            <YAxis
                                tickFormatter={(value) =>
                                    `${(value / 1000000).toFixed(0)}M`
                                }
                                tick={{ fontSize: 11 }}
                            />

                            <Tooltip
                                formatter={(value) => [
                                    formatNumber(value),
                                    "Population"
                                ]}
                                labelFormatter={(label) =>
                                    `Country: ${label}`
                                }
                            />

                            <Bar
                                dataKey="Population"
                                name="Population"
                                fill="#4F46E5"
                                radius={[5, 5, 0, 0]}
                                maxBarSize={55}
                            />

                        </BarChart>

                    </ResponsiveContainer>

                )}

            </div>

        </div>

    );
};

export default PopulationChart;
