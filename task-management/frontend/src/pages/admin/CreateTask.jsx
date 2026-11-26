import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createTaskAPI } from '../../services/taskAPI'

const initialForm = {
    taskTitle: '',
    description: '',
    status: 'pending',
    priority: 'Medium',
    department: '',
    startDate: '',
    endDate: ''
}

const CreateTask = () => {
    const [formData, setFormData] = useState(initialForm)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (formData.endDate < formData.startDate) {
            toast.error('End date cannot be earlier than start date')
            return
        }

        try {
            setLoading(true)

            const response = await createTaskAPI(formData)

            toast.success(response.msg || 'Task created successfully')
            setFormData(initialForm)
            navigate('/admin/tasks')

        } catch (error) {
            toast.error(error.response?.data?.msg || 'Unable to create task')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container-fluid p-4">

            <div className="mb-4">
                <h3 className="fw-bold">Create New Task</h3>
                <p className="text-muted">
                    Enter the task information below.
                </p>
            </div>

            <div className="card border-0 shadow-sm">
                <div className="card-body p-4">

                    <form onSubmit={handleSubmit}>

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">Task Title *</label>
                                <input
                                    type="text"
                                    name="taskTitle"
                                    className="form-control"
                                    value={formData.taskTitle}
                                    onChange={handleChange}
                                    placeholder="Enter task title"
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Department *</label>
                                <input
                                    type="text"
                                    name="department"
                                    className="form-control"
                                    value={formData.department}
                                    onChange={handleChange}
                                    placeholder="e.g. Development"
                                    required
                                />
                            </div>

                            <div className="col-12">
                                <label className="form-label">Description *</label>
                                <textarea
                                    name="description"
                                    className="form-control"
                                    rows="4"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Enter task description"
                                    required
                                />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Priority</label>
                                <select
                                    name="priority"
                                    className="form-select"
                                    value={formData.priority}
                                    onChange={handleChange}
                                >
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Status</label>
                                <select
                                    name="status"
                                    className="form-select"
                                    value={formData.status}
                                    onChange={handleChange}
                                >
                                    <option value="pending">Pending</option>
                                    <option value="in-progress">In Progress</option>
                                    <option value="complete">Complete</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Start Date *</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    className="form-control"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">End Date *</label>
                                <input
                                    type="date"
                                    name="endDate"
                                    className="form-control"
                                    value={formData.endDate}
                                    min={formData.startDate || undefined}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>

                        <div className="mt-4 d-flex gap-2">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={loading}
                            >
                                {loading ? 'Creating...' : 'Create Task'}
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

export default CreateTask