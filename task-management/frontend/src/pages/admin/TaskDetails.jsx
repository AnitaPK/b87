import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
    getTaskByIdAPI,
    deleteTaskAPI
} from '../../services/taskAPI'

const TaskDetails = () => {
    const { ID } = useParams()
    const navigate = useNavigate()

    const [task, setTask] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await getTaskByIdAPI(ID)
                setTask(response.task || response)
            } catch (error) {
                toast.error(error.response?.data?.msg || 'Unable to load task')
            } finally {
                setLoading(false)
            }
        }

        fetchTask()
    }, [ID])

    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this task?'
        )

        if (!confirmDelete) return

        try {
            const response = await deleteTaskAPI(ID)
            toast.success(response.msg || 'Task deleted successfully')
            navigate('/admin/tasks')
        } catch (error) {
            toast.error(error.response?.data?.msg || 'Unable to delete task')
        }
    }

    if (loading) {
        return <div className="text-center p-5">Loading task...</div>
    }

    if (!task) {
        return (
            <div className="container p-4">
                <h4>Task not found</h4>
                <Link to="/admin/tasks" className="btn btn-primary mt-3">
                    Back to Tasks
                </Link>
            </div>
        )
    }

    return (
        <div className="container-fluid p-4">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3 className="fw-bold">Task Details</h3>
                    <p className="text-muted mb-0">
                        View complete task information.
                    </p>
                </div>

                <div className="d-flex gap-2">
                    <Link
                        to={`/admin/edit-task/${ID}`}
                        className="btn btn-warning"
                    >
                        Edit Task
                    </Link>

                    <button
                        className="btn btn-danger"
                        onClick={handleDelete}
                    >
                        Delete Task
                    </button>
                </div>
            </div>

            <div className="card border-0 shadow-sm">
                <div className="card-body p-4">

                    <h4 className="fw-bold mb-3">{task.taskTitle}</h4>

                    <p className="text-muted">
                        {task.description}
                    </p>

                    <hr />

                    <div className="row g-4">

                        <div className="col-md-6">
                            <small className="text-muted">Department</small>
                            <h6>{task.department}</h6>
                        </div>

                        <div className="col-md-6">
                            <small className="text-muted">Priority</small>
                            <h6>{task.priority}</h6>
                        </div>

                        <div className="col-md-6">
                            <small className="text-muted">Status</small>
                            <h6>
                                <span className="badge bg-primary">
                                    {task.status}
                                </span>
                            </h6>
                        </div>

                        <div className="col-md-6">
                            <small className="text-muted">Created By</small>
                            <h6>{task.createdBy}</h6>
                        </div>

                        <div className="col-md-6">
                            <small className="text-muted">Start Date</small>
                            <h6>{task.startDate}</h6>
                        </div>

                        <div className="col-md-6">
                            <small className="text-muted">End Date</small>
                            <h6>{task.endDate}</h6>
                        </div>

                    </div>

                    <hr />

                    <Link to="/admin/tasks" className="btn btn-secondary">
                        Back to All Tasks
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default TaskDetails