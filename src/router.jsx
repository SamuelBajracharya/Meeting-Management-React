import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReadOnlyLayout from "./layouts/ReadOnlyLayout.jsx";
import TeamLeadLayout from "./layouts/TeamLeadLayout.jsx";
import SuperAdminLayout from "./layouts/SuperAdminLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Role-based layouts */}
        <Route path="/lead/*" element={<TeamLeadLayout />} />
        <Route path="/super/*" element={<SuperAdminLayout />} />
        <Route path="/auth/*" element={<AuthLayout />} />

        {/* Default layout for public or readonly users */}
        <Route path="/*" element={<ReadOnlyLayout />} />

        {/* Not found fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
