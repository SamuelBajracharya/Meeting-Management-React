import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPermission, assignPermission } from "../api/superAdminAPI.js";

// Create permission
export const useCreatePermission = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPermission,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["permissions"] });
    },
  });
};

// Assign permission
export const useAssignPermission = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: assignPermission,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["permissions"] });
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
