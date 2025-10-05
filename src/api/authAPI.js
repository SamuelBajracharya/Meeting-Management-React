import {userInstance} from "./axiosInstance.js";

// Register user
export const registerUser = (data) => userInstance().post("/register", data);

// Login user
export const loginUser = (data) => userInstance.post("/login", data);

// Create user profile
export const createUserProfile = (data) => userInstance.post("/create", data);

// Get user profile details
export const getUserProfile = () => userInstance.get("/get-profile-details");