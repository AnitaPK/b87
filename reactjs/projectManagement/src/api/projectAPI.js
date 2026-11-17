import axios from "axios"
import axiosInstance from "./axiosnstance"

export async function getAllProjects(){
    try {
        const res = await axiosInstance.get("/projects")
        console.log(res.data)
        const re = res.data
        return re
    } catch (error) {
        throw error
    }
}

export async function getProjectByID(ID){
try {
    const res = await axiosInstance.get(`/projects/${ID}`)
    const re = res.data
    console.log(re)
    return re    
} catch (error) {
    console.error("Error creating project:", error);
    throw error;
}
}

export async function updateStatus(ID, data) { 
    try { 
        const res = await axiosInstance.put( `/projects/${ID}`, data ); 
        return res.data; 
    } catch (error) {
         console.error("Error updating status:", error); 
         throw error; 
    } }

export async function updateProject(ID, data) {
  try {
    const res = await axiosInstance.put(`/projects/${ID}`, data);
    return res.data;
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
}

export async function deleteProject(ID){
    try {
        const res = await axiosInstance.delete(`/projects/${ID}`)
        if(res){
        return "Project Deleted Successfully"
        }else{
        return "Error While Deleting"
        }
    } catch (error) {
        throw error
        return "Error While Deleting"
    }
}

export async function createProject(data) {
  try {
    const res = await axiosInstance.post("/projects", data);
    return res.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
}