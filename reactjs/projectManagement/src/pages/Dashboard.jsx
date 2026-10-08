import React, { useEffect, useState } from 'react'
import { getAllProjects, deleteProject } from '../api/projectAPI'

const Dashboard = () => {
    const [projects, setProjects] = useState([])
    const [status,setStatus] =useState()

    const handleChange = (e) => {
        setStatus(e.target.value);
    };

    async function fetchAllData() {
        const projectsD = await getAllProjects()
        setProjects(projectsD)
    }

    async function handleDelete(ID) {
        const pDelete = await deleteProject(ID)
        alert(pDelete)

    }
    useEffect(() => {
        fetchAllData()
    }, [])

    // console.log(projects)
    return (
        <>
            <div>
                Search and Filter
            </div>
            <div><button>Add New Project</button></div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">
                                Project Name (Details)</th>
                            <th scope="col">Department</th>
                            <th scope="col">Priority</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Status</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects?.map((p, i) => (
                            <tr key={p.id}>
                                <th scope="col">#</th>
                                <th scope="col">
                                    {p.ProjectName}</th>
                                <th scope="col">Department</th>
                                <th scope="col">Priority</th>
                                <th scope="col">Start Date</th>
                                <th scope="col">End Date</th>
                                <th scope="col">
                                    <select value={p.status}
                                    name={status}
                                        onChange={handleChange} >
                                        <option value={p.status}>{p.status}</option>
                                        <option value="Pending">Pending</option>
                                        <option value="In-progress">In-Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                    <button onClick={() => handleStatusUpdate(p.id, status)}>
                                        Update Status
                                    </button>
                                </th>
                                <th>
                                    <button>Edit</button>
                                    <button onClick={() => handleDelete(p.id)}>Delete</button>

                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Dashboard