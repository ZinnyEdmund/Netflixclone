import "./layout.css";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Avatar from "../Avatarsidebar/Avatar";
import { FaBars, FaTimes } from "react-icons/fa";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  

  return (
    <>
      <div className="hamburger-container">
        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="hamburger"
        >
          {showSidebar ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div className="dashboard-layout">
        {/* LEFT SIDEBAR */}
        <div className={`sidebar ${showSidebar ? "show" : "hide"}`}>
          <Sidebar show={showSidebar} />
        </div>

        {/* CENTER HERO CONTENT */}
        <div className="main-content">{children}</div>

        {/* RIGHT AVATAR */}
        <div className="avatar">
          <Avatar />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
