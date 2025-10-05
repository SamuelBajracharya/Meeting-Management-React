import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
  getAllProjects,
  getProjects
} from "../api/projectAPI.js";

// Get single project by ID
export const useProjectById = (projectId) => {
  return useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getProjectById(projectId),
    enabled: !!projectId,
  });
};

// Get all projects (root)
export const useAllProjects = () => {
  return useQuery({
    queryKey: ["allProjects"],
    queryFn: getAllProjects,
    staleTime: 1000 * 60 * 5,
  });
};

// Get projects (explicit endpoint)
export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    staleTime: 1000 * 60 * 5,
  });
};

// Create project
export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["allProjects"] });
    },
  });
};

// Update project
export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ projectId, data }) => updateProject(projectId, data),
    onSuccess: (_, { projectId }) => {
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["allProjects"] });
    },
  });
};

// Delete project
export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (projectId) => deleteProject(projectId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["allProjects"] });
    },
  });
};
