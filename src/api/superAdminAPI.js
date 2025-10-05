import {baseInstance} from "./axiosInstance.js";

// Create new permission
export const createPermission = (data) => baseInstance.post("/permission/create", data);

// Assign permission
export const assignPermission = (data) => baseInstance.post("/permission/assign", data);