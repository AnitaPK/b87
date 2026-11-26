import API from './api'

const ASSIGN_URL = '/api/assignTask'

export const assignTaskAPI = async (assignData) => {
    const response = await API.post(`${ASSIGN_URL}/assignTask`, assignData)
    return response.data
}

export const getTasksByUserAPI = async () => {
    const response = await API.get(`${ASSIGN_URL}/getTasksByUser`)
    return response.data
}

export const getUsersByTaskAPI = async () => {
    const response = await API.get(`${ASSIGN_URL}/getUsersByTask`)
    return response.data
}

export const deleteAssignTaskAPI = async (assignData) => {
    const response = await API.delete(`${ASSIGN_URL}/deleteAssignTask`, {
        data: assignData
    })
    return response.data
}

export const updateAssignTaskAPI = async (assignData) => {
    const response = await API.put(`${ASSIGN_URL}/updateAssignTask`, assignData)
    return response.data
}