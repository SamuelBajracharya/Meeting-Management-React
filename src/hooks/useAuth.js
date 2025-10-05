import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {createUserProfile, getUserProfile, loginUser, registerUser} from "../api/authAPI.js";


// Get user profile (auto-refetch when invalidated)
export const useUserProfile = () => {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
    staleTime: 1000 * 60 * 5, // cache for 5 mins
  });
};

// Register user
export const useRegisterUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
};

// Login user
export const useLoginUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
};

// Create user profile (refetch profile after creating)
export const useCreateUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
};
