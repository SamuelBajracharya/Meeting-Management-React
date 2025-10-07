import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const PublicRoutes = () => {
  const token = Cookies.get("auth_token");

  if (token) {
    try {
      const decoded = jwtDecode(token);
      const userRole = decoded?.role;

      // Redirect authenticated users to their dashboard layout
      if (userRole === "superadmin") return <Navigate to="/super" replace />;
      if (userRole === "teamlead") return <Navigate to="/lead" replace />;
      return <Navigate to="/" replace />;
    } catch {
      Cookies.remove("auth_token");
    }
  }

  return <Outlet />;
};

export default PublicRoute;
