import React from "react";
import {Route, Routes} from "react-router-dom";
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/auth/Login.jsx";
import SignUp from "../pages/auth/SignUp.jsx";
import {Image} from "antd";

const AuthLayout = () => {
  return (
    <div className="flex max-h-screen overflow-hidden h-screen">
      {/* Left Content Section */}
      <div className="w-1/2 flex flex-col py-10 px-16 bg-white">
        <div className="w-full h-[100px]">
          <Image src="/logo.png" width={200} preview={false} alt="Logo" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-1/2 h-full">
        <img
          src="/authImage.png"
          alt="Auth Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
