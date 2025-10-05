import { useLocation } from "react-router-dom";
import useSidebarStore from "../../store/sidebarStore.js";
import { FiSidebar } from "react-icons/fi";

export default function Navbar({ menuItems = [] }) {
  const { toggleSidebar } = useSidebarStore();
  const location = useLocation();

  // Extract last segment from URL (e.g. "/dashboard" → "dashboard")
  const pathKey = location.pathname.split("/").filter(Boolean).pop() || "dashboard";

  // Find the label that matches current path
  const currentItem = menuItems.find((item) => `/${item.key}` === `/${pathKey}`);
  const title = currentItem ? currentItem.label : "Dashboard";

  return (
    <nav className="flex items-center justify-between size-full  py-4 px-2 bg-none border-b border-blue-200">
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <FiSidebar className="w-6 h-6 text-blue-950" />
        </button>
        <h1 className="text-2xl font-medium text-blue-950">{title}</h1>
      </div>
    </nav>
  );
}
