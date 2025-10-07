import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const ProtectedRoutes = ({ allowedRoles = [], redirectTo = "/auth/login" }) => {
  const token = Cookies.get("access_token");

  if (!token) {
    return <Navigate to={redirectTo} replace />;
  }

  try {
    // Decode the token and extract role
    const decoded = jwtDecode(token);
    const userRole = decoded?.role;

    // If no role or not allowed, redirect
    if (!userRole || (allowedRoles.length && !allowedRoles.includes(userRole))) {
      return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
  } catch (err) {
    console.error("Invalid token:", err);
    Cookies.remove("auth_token");
    return <Navigate to={redirectTo} replace />;
  }
};

export default ProtectedRoute;
