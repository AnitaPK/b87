import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import API from '../../services/api'
import { getAllTasksAPI } from '../../services/taskAPI'
import { assignTaskAPI } from '../../services/assignTaskAPI'

const AssignTask = () => {
    const navigate = useNavigate()

    const [tasks, setTasks] = useState([])
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    const [formData, setFormData] = useState({
        taskId: '',
        userId: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [taskResponse, userResponse] = await Promise.all([
                    getAllTasksAPI(),
                    API.get('/api/user/getAllUsers')
                ])

                setTasks(taskResponse.tasks || [])
                setUsers(userResponse.data.users || [])
            } catch (error) {
                toast.error(
                    error.response?.data?.msg || 'Unable to load tasks and users'
                )
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setSaving(true)

            const response = await assignTaskAPI({
                taskId: Number(formData.taskId),
                userId: Number(formData.userId)
            })

            toast.success(response.msg || 'Task assigned successfully')

            setFormData({
                taskId: '',
                userId: ''
            })

            navigate('/admin/tasks')
        } catch (error) {
            toast.error(error.response?.data?.msg || 'Unable to assign task')
        } finally {
            setSaving(false)
        }
    }

    if (loading) {
        return <div className="text-center p-5">Loading data...</div>
    }

    return (
        <div className="container-fluid p-4">

            <h3 className="fw-bold mb-2">Assign Task</h3>
            <p className="text-muted mb-4">
                Select a task and assign it to a user.
            </p>

            <div className="card border-0 shadow-sm">
                <div className="card-body p-4">

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label">Select Task *</label>

                            <select
                                name="taskId"
                                className="form-select"
                                value={formData.taskId}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose a task</option>

                                {tasks.map((task) => (
                                    <option key={task.id} value={task.id}>
                                        {task.taskTitle}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Select User *</label>

                            <select
                                name="userId"
                                className="form-select"
                                value={formData.userId}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose a user</option>

                                {users
                                    .filter((user) => user.role === 'user')
                                    .map((user) => (
                                        <option key={user.id} value={user.id}>
                                            {user.name} ({user.email})
                                        </option>
                                    ))}
                            </select>
                        </div>

                        <div className="d-flex gap-2 mt-4">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={saving || !tasks.length || !users.length}
                            >
                                {saving ? 'Assigning...' : 'Assign Task'}
                            </button>

                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => navigate('/admin/tasks')}
                            >
                                Cancel
                            </button>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    )
}

export default AssignTask