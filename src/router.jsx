import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReadOnlyLayout from "./layouts/ReadOnlyLayout.jsx";
import TeamLeadLayout from "./layouts/TeamLeadLayout";
import SuperAdminLayout from "./layouts/SuperAdminLayout";

import NotFound from "./pages/NotFound.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout routes */}
        <Route path="/*" element={<ReadOnlyLayout />} />
        <Route path="/lead/*" element={<TeamLeadLayout />} />
        <Route path="/super/*" element={<SuperAdminLayout />} />
        <Route path="/auth/*" element={<AuthLayout />} />


        {/*  Notfound routes*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
