import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReadOnlyLayout from "./layouts/ReadOnlyLayout.jsx";
import TeamLeadLayout from "./layouts/TeamLeadLayout.jsx";
import SuperAdminLayout from "./layouts/SuperAdminLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProtectedRoutes from "./layouts/ProtectedRoutes.jsx";
import PublicRoutes from "./layouts/PublicRoutes.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/*SuperAdmin-only layout */}
        <Route element={<ProtectedRoutes allowedRoles={["superadmin"]} />}>
          <Route path="/super/*" element={<SuperAdminLayout />} />
        </Route>

        {/*TeamLead-only layout */}
        <Route element={<ProtectedRoutes allowedRoles={["teamlead", "superadmin"]} />}>
          <Route path="/lead/*" element={<TeamLeadLayout />} />
        </Route>

        {/* Auth routes*/}
        <Route element={<PublicRoutes />}>
          <Route path="/auth/*" element={<AuthLayout />} />
        </Route>
        {/* Read-only layout */}
        <Route path="/*" element={<ReadOnlyLayout />} />

        {/* Fallback path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
