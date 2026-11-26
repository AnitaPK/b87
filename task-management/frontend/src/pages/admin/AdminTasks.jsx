import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
    getAllTasksAPI,
    deleteTaskAPI
} from '../../services/taskAPI'

const AdminTasks = () => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState('all')
    const [priority, setPriority] = useState('all')

    const fetchTasks = async () => {
        try {
            setLoading(true)
            const response = await getAllTasksAPI()
            setTasks(response.tasks || [])
        } catch (error) {
            toast.error(error.response?.data?.msg || 'Unable to fetch tasks')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    const handleDelete = async (ID) => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this task?'
        )

        if (!confirmDelete) return

        try {
            const response = await deleteTaskAPI(ID)
            toast.success(response.msg || 'Task deleted successfully')
            fetchTasks()
        } catch (error) {
            toast.error(error.response?.data?.msg || 'Unable to delete task')
        }
    }

    const filteredTasks = useMemo(() => {
        return tasks.filter((task) => {
            const matchesSearch = task.taskTitle
                ?.toLowerCase()
                .includes(search.toLowerCase())

            const matchesStatus =
                status === 'all' || task.status === status

            const matchesPriority =
                priority === 'all' || task.priority === priority

            return matchesSearch && matchesStatus && matchesPriority
        })
    }, [tasks, search, status, priority])

    const getStatusClass = (value) => {
        switch (value) {
            case 'complete':
                return 'bg-success'
            case 'in-progress':
                return 'bg-warning text-dark'
            default:
                return 'bg-secondary'
        }
    }

    const getPriorityClass = (value) => {
        switch (value) {
            case 'High':
                return 'text-danger fw-bold'
            case 'Medium':
                return 'text-warning fw-bold'
            default:
                return 'text-success fw-bold'
        }
    }

    return (
        <div className="container-fluid p-4">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3 className="fw-bold">All Tasks</h3>
                    <p className="text-muted mb-0">
                        Manage all tasks from here.
                    </p>
                </div>

                <Link to="/admin/create-task" className="btn btn-primary">
                    + Create Task
                </Link>
            </div>

            {/* Search and Filters */}
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                    <div className="row g-3">

                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search task title..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="col-md-4">
                            <select
                                className="form-select"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="all">All Statuses</option>
                                <option value="pending">Pending</option>
                                <option value="in-progress">In Progress</option>
                                <option value="complete">Complete</option>
                            </select>
                        </div>

                        <div className="col-md-4">
                            <select
                                className="form-select"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                <option value="all">All Priorities</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>

            {/* Tasks Table */}
            <div className="card border-0 shadow-sm">
                <div className="card-body">

                    {loading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" />
                            <p className="mt-2">Loading tasks...</p>
                        </div>
                    ) : filteredTasks.length === 0 ? (
                        <div className="text-center py-5">
                            <h5>No tasks found</h5>
                            <p className="text-muted">
                                Create a task or change your filters.
                            </p>
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-hover align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>#</th>
                                        <th>Task Title</th>
                                        <th>Department</th>
                                        <th>Priority</th>
                                        <th>Status</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredTasks.map((task, index) => (
                                        <tr key={task.id}>
                                            <td>{index + 1}</td>
                                            <td className="fw-semibold">
                                                {task.taskTitle}
                                            </td>
                                            <td>{task.department}</td>
                                            <td>
                                                <span className={getPriorityClass(task.priority)}>
                                                    {task.priority}
                                                </span>
                                            </td>
                                            <td>
                                                <span className={`badge ${getStatusClass(task.status)}`}>
                                                    {task.status}
                                                </span>
                                            </td>
                                            <td>{task.startDate}</td>
                                            <td>{task.endDate}</td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <Link
                                                        to={`/admin/task-details/${task.id}`}
                                                        className="btn btn-sm btn-info text-white"
                                                        title="View"
                                                    >
                                                        View
                                                    </Link>

                                                    <Link
                                                        to={`/admin/edit-task/${task.id}`}
                                                        className="btn btn-sm btn-warning"
                                                        title="Edit"
                                                    >
                                                        Edit
                                                    </Link>

                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => handleDelete(task.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                </div>
            </div>

            <p className="text-muted mt-3">
                Showing {filteredTasks.length} of {tasks.length} tasks
            </p>

        </div>
    )
}

export default AdminTasks