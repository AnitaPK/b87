import { useEffect, useState } from "react";

import {
    FiUsers,
    FiGlobe,
    FiMapPin,
    // FiLanguages
} from "react-icons/fi";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

// import StatCard from "../../components/common/StatCard";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";

import {getTopCountries, getTotalPopulation} from "./dashboardService"
import StatCard from "../components/common/StatCard";
import PopulationChart from "../components/common/PopulationChart";


const formatNumber = (value) => {
    return Number(value || 0).toLocaleString("en-IN");
};


const Dashboard = () => {

    const [stats, setStats] = useState(null);
    const [continents, setContinents] = useState([]);
    const [topCountries, setTopCountries] = useState([]);
    const [getTotalPopulations, setGetTotalPopulations] = useState(null)
    const [dataTop10, setDataTop10] = useState(null)


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchDashboardData = async () => {

            try {

                setLoading(true);
                setError("");

                const [
                    // statsResponse,
                    // continentResponse,
                    // countriesResponse,
                    getTotalPopulation1,
                    top10Con
                ] = await Promise.all([
                    // getDashboardStats(),
                    // getContinentStats(),
                    // getTopCountries(),
                    getTotalPopulation(),
                    getTopCountries(),
                ]);

                // setStats(statsResponse.data);
                // setContinents(continentResponse.data);
                // setTopCountries(countriesResponse.data);
                setGetTotalPopulations(getTotalPopulation1);
                    setDataTop10(top10Con.top10Pop)


            } catch (error) {

                console.error("Dashboard API Error:", error);

                setError(
                    error.response?.data?.message ||
                    error.message ||
                    "Unable to load dashboard data"
                );

            } finally {

                setLoading(false);

            }
        };

        fetchDashboardData();

    }, []);


    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }


    return (

        <div className="dashboard-page">

            {/* Page Heading */}

            <div className="page-heading mb-4">

                <h4 className="fw-bold">
                    Dashboard Overview
                </h4>

                <p className="text-muted mb-0">
                    Explore population and geographical statistics
                    around the world.
                </p>

            </div>


            {/* Statistics Cards */}

            <div className="row g-3 mb-4">

                <div className="col-12 col-sm-6 col-xl-3">

                    <StatCard
                        title="World Population"
                        value={formatNumber(getTotalPopulations.totalPopulation)}
                        icon={<FiUsers />}
                        description="Total population"
                    />

                </div>

                <div className="col-12 col-sm-6 col-xl-3">

                    {/* <StatCard
                        title="Total Countries"
                        value={formatNumber(stats.totalCountries)}
                        icon={<FiGlobe />}
                        description="Countries in database"
                    /> */}

                </div>

                <div className="col-12 col-sm-6 col-xl-3">

                    {/* <StatCard
                        title="Total Cities"
                        value={formatNumber(stats.totalCities)}
                        icon={<FiMapPin />}
                        description="Cities in database"
                    /> */}

                </div>

                <div className="col-12 col-sm-6 col-xl-3">

                    {/* <StatCard
                        title="Total Languages"
                        value={formatNumber(stats.totalLanguages)}
                        // icon={<FiLanguages />}
                        description="Distinct languages"
                    /> */}

                </div>

            </div>


            {/* Charts */}

            <div className="row g-3">

                {/* Continent Population */}

                <div className="col-12 col-xl-6">

                    <div className="card chart-card border-0 shadow-sm">

                        <div className="card-body">

                            <h5 className="fw-bold mb-4">
                                Population by Continent
                            </h5>

                            <PopulationChart data={dataTop10} />    

                        </div>

                    </div>

                </div>


                {/* Top Countries */}
{/* 
                <div className="col-12 col-xl-6">

                    <div className="card chart-card border-0 shadow-sm">

                        <div className="card-body">

                            <h5 className="fw-bold mb-4">
                                Top 10 Populated Countries
                            </h5>

                            <ResponsiveContainer width="100%" height={320}>

                                <BarChart
                                    data={topCountries}
                                    layout="vertical"
                                    margin={{ left: 20, right: 20 }}
                                >

                                    <CartesianGrid strokeDasharray="3 3" />

                                    <XAxis type="number" />

                                    <YAxis
                                        type="category"
                                        dataKey="Name"
                                        width={100}
                                        tick={{ fontSize: 11 }}
                                    />

                                    <Tooltip
                                        formatter={(value) => formatNumber(value)}
                                    />

                                    <Bar
                                        dataKey="Population"
                                        fill="#0D9488"
                                        radius={[0, 5, 5, 0]}
                                    />

                                </BarChart>

                            </ResponsiveContainer>

                        </div>

                    </div>

                </div> */}

            </div>

        </div>

    );
};

export default Dashboard;