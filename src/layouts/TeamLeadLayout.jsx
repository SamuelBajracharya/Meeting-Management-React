import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";

import NotFound from "../pages/NotFound";
import Dashboard from "../pages/global/Dashboard.jsx";
import Meetings from "../pages/global/Meetings.jsx";
import Calender from "../pages/lead/Calender.jsx";
import Projects from "../pages/lead/Projects.jsx";

import Sidebar from "../components/globalComponents/Sidebar.jsx";
import Navbar from "../components/globalComponents/Navbar.jsx";

import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import useSidebarStore from "../store/sidebarStore.js";

const { Sider, Header, Content } = Layout;

export default function TeamLeadLayout() {
  const collapsed = useSidebarStore((state) => state.isSidebarClosed);

  const menuItems = [
    { key: "lead/dashboard", label: "Dashboard", icon: <BiSolidDashboard className="w-5 h-5" /> },
    { key: "lead/calender", label: "Calender", icon: <BsFillCalendarDateFill className="w-4 h-4" /> },
    { key: "lead/meetings", label: "My Meetings", icon: <MdOutlineAccessTimeFilled className="w-5 h-5" /> },
    { key: "lead/projects", label: "Projects", icon: <AiFillProject className="w-5 h-5" /> },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        width={300}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          background: "#bfdbfe",
          overflow: "auto",
        }}
        trigger={null}
      >
        <Sidebar menuItems={menuItems} collapsed={collapsed} />
      </Sider>

      {/* Main Layout */}
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 300, // adjust content margin when collapsed
          transition: "margin-left 0.2s",
        }}
      >
        {/* Navbar */}
        <Header
          style={{
            background: "rgba(245,245,245,0.3)",
            backdropFilter: "blur(10px)",
            height: 80,
            display: "flex",
            alignItems: "center",
            padding: 0,
            position: "fixed",
            top: 0,
            left: collapsed ? 80 : 300,
            right: 0,
            zIndex: 100,
            transition: "left 0.2s",
            margin: 0

          }}
        >
          <Navbar menuItems={menuItems} />
        </Header>

        {/* Page Content */}
        <Content style={{ marginTop: 80, padding: 16 }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}
