import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

import NotFound from "../pages/NotFound";
import Dashboard from "../pages/global/Dashboard.jsx";
import Meetings from "../pages/global/Meetings.jsx";
import Sidebar from "../components/globalComponents/Sidebar.jsx";
import Navbar from "../components/globalComponents/Navbar.jsx";

const { Header, Content } = Layout;

export default function ReadOnlyLayout() {
  const menuItems = [
    { key: "dashboard", label: "Dashboard", icon: <BiSolidDashboard className="w-5 h-5" /> },
    { key: "meetings", label: "My Meetings", icon: <MdOutlineAccessTimeFilled className="w-5 h-5" /> },
  ];


  return (
    <div className="flex min-h-screen">
      {/* Sidebar - completely fixed */}
      <div className="w-[300px] fixed top-0 left-0 h-screen !bg-blue-100 z-50">
        <Sidebar menuItems={menuItems} />
      </div>

      {/* Main content area */}
      <div className="flex-1 ml-[300px] flex flex-col">
        {/* Navbar - fixed */}
        <Header className="!h-20 !bg-[#f5f5f5]/30 backdrop-blur-sm fixed top-0 left-[300px] right-0 z-40 !mx-0 !px-0">
          <Navbar menuItems={menuItems}/>
        </Header>

        {/* Page Content */}
        <Content className="mt-20 p-4 flex-1 h-[120vh]">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Content>
      </div>
    </div>
  );
}
