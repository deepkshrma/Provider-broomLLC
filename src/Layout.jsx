import React, { useState } from "react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./assets/components/Sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />

        {/* Scrollable Content */}
        <main
          className={`${
            isSidebarOpen ? "main main_page" : ""
          } flex-1 overflow-y-auto p-4 bg-gray-100`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
