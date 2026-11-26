import API from './api'

const TASK_URL = '/api/task'

export const createTaskAPI = async (taskData) => {
    const response = await API.post(`${TASK_URL}/createTask`, taskData)
    return response.data
}

export const getAllTasksAPI = async () => {
    const response = await API.get(`${TASK_URL}/getAllTasks`)
    return response.data
}

export const getTaskByIdAPI = async (ID) => {
    const response = await API.get(`${TASK_URL}/getTaskById/${ID}`)
    return response.data
}

export const updateTaskAPI = async (ID, taskData) => {
    const response = await API.put(`${TASK_URL}/updateTask/${ID}`, taskData)
    return response.data
}

export const deleteTaskAPI = async (ID) => {
    const response = await API.delete(`${TASK_URL}/deleteTask/${ID}`)
    return response.data
}