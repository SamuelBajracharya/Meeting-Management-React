import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";

import NotFound from "../pages/NotFound";
import Dashboard from "../pages/global/Dashboard.jsx";
import Meetings from "../pages/global/Meetings.jsx";
import Calender from "../pages/lead/Calender.jsx";
import Projects from "../pages/lead/Projects.jsx";

import Sidebar from "../components/globalComponents/Sidebar.jsx";
import Navbar from "../components/globalComponents/Navbar.jsx";

const { Header, Content } = Layout;

export default function TeamLeadLayout() {
  const menuItems = [
    { key: "dashboard", label: "Dashboard" },
    { key: "calender", label: "Calender" },
    { key: "meetings", label: "My Meetings" },
    { key: "projects", label: "Projects" },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar menuItems={menuItems} />

      {/* Main Layout */}
      <Layout>
        {/* Navbar */}
        <Header style={{ padding: 0, background: "var(--color-background)" }}>
          <Navbar />
        </Header>

        {/* Page Content */}
        <Content style={{ margin: "16px", background: "var(--color-card)" }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}
