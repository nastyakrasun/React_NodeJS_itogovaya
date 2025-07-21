import axios from "axios";

const API_URL = "http://localhost:5000/projects";

export const getProjects = () => axios.get(API_URL);
export const createProject = (project) => axios.post(API_URL, project);
export const updateProject = (id, updatedProject) => axios.put(`${API_URL}/${id}`, updatedProject);
export const deleteProject = (id) => axios.delete(`${API_URL}/${id}`);
