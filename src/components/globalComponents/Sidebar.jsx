import React from "react";
import {Avatar, Image} from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { LuChevronsUpDown } from "react-icons/lu";

export default function Sidebar({ menuItems }) {
  const navigate = useNavigate();
  const location = useLocation();

  const activeKey = location.pathname.split("/")[1] || "dashboard";

  return (
    <div className="h-screen w-full bg-blue-100 flex flex-col justify-between">
      {/* Logo Section */}
      <div className="p-6 pt-4 flex items-center justify-center gap-3">
        <Image src="src/assets/logo.png" width={200} preview={false} alt="Logo"/>
      </div>

      {/* Menu Section */}
      <div className="flex flex-col gap-2 px-4 mt-6 flex-1">
        {menuItems.map((item) => {
          const isActive = activeKey === item.key;
          return (
            <button
              key={item.key}
              onClick={() => navigate(`/${item.key}`)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition cursor-pointer
                ${
                isActive
                  ? "bg-blue-600 text-blue-50"
                  : "text-[#1E2A47] hover:bg-blue-200"
              }`}
            >
              <span
                className={`text-lg ${
                  isActive ? "text-white" : "text-[#1E2A47]"
                }`}
              >
                {item.icon}
              </span>
              {item.label}
            </button>
          );
        })}
      </div>

      {/* User Profile Section */}
      <div className="p-4 py-3 border-t border-blue-200">
        <div className="flex items-center gap-3">
          <Avatar
            size={40}
            shape="square"
            src="src/assets/profile.jpg"
          />
          <div className="flex-1 min-w-0">
            <p className="text-md font-medium text-blue-950 truncate">
              Samuel Bajracharya
            </p>
            <p className="text-[14px] text-blue-950 truncate">
              samuelbaj@swifttech.com
            </p>
          </div>
          <button className="text-blue-950 hover:text-blue-600"><LuChevronsUpDown /></button>
        </div>
      </div>
    </div>
  );
}
