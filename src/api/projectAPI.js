import {projectInstance} from "./axiosInstance.js";

// Create project
export const createProject = (data) => projectInstance.post("/create-project", data);

// Update project by ID
export const updateProject = (projectId, data) =>
  projectInstance.patch(`/update-project/${projectId}`, data);

// Delete project by ID
export const deleteProject = (projectId) =>
  projectInstance.delete(`/delete-project/${projectId}`);

// Get project by ID
export const getProjectById = (projectId) => projectInstance.get(`/${projectId}`);

// Get all projects (root endpoint)
export const getAllProjects = () => projectInstance.get("/");

// Get all projects (explicit endpoint)
export const getProjects = () => projectInstance.get("/get-projects");