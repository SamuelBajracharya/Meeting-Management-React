import { useLocation } from "react-router-dom";
import useSidebarStore from "../../store/sidebarStore.js";
import { FiSidebar } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Navbar({ menuItems = [] }) {
  const location = useLocation();
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

  // Remove the leading "/" for easier matching
  const pathKey = location.pathname.startsWith("/")
    ? location.pathname.slice(1)
    : location.pathname;

  // Find the matching menu item
  const currentItem =
    menuItems.find((item) => item.key === pathKey) ||
    // fallback: if no exact match, try last segment
    menuItems.find(
      (item) => item.key.split("/").pop() === pathKey.split("/").pop()
    );

  const title = currentItem ? currentItem.label : "Dashboard";

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], { hour12: false });

  return (
    <nav className="flex items-center justify-between size-full py-4 px-4 bg-none border-b-2 border-blue-200">
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-blue-100 cursor-pointer transition-colors"
        >
          <FiSidebar className="w-6 h-6 text-blue-950" />
        </button>
        <h1 className="text-2xl font-medium text-blue-950">{title}</h1>
      </div>

      <div className="flex items-center gap-3 px-2">
        <div className="bg-blue-100 rounded-2xl flex-1 text-center text-blue-950 text-xl font-medium px-4 py-2 w-[150px]">
          <p className="tracking-wide">{formattedTime}</p>
        </div>
      </div>
    </nav>
  );
}
