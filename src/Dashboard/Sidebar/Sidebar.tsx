// Sidebar.tsx
// import React from 'react';
import "./Sidebar.css";
import { FaUserFriends, FaCogs, FaSignOutAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { PiCompassFill } from "react-icons/pi";
import { GiPopcorn } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

const Sidebar = ({ show }: { show: boolean }) => {
  return (
    <aside className={`sidebar ${show ? "show" : "hide"}`}>
      <div className="my_logo">
        Netflix<span className="dot">.</span>
      </div>

      <nav className="menu">
        <p className="menu-label">Menu</p>
        <ul>
          <li>
            <PiCompassFill className="side_icons" /> <span>Browse</span>
          </li>
          <li>
            <IoMdHeart className="side_icons" />
            <span>Watchlist</span>
          </li>
          <li>
            <FaRegCalendarAlt className="side_icons" />
            <span>Coming Soon</span>
          </li>
        </ul>

        <p className="menu-label">Social</p>
        <ul className="my_menu-list">
          <li>
            <FaUser className="side_icons" /> <span>Friends</span>
          </li>
          <li>
            <FaUserFriends className="side_icons" /> <span>Parties</span>
          </li>
        </ul>

        <p className="menu-label">General</p>
        <ul>
          <li>
            <FaCogs className="side_icons" /> <span>Settings</span>
          </li>
          <li>
            <FaSignOutAlt className="side_icons" /> <span>Log out</span>
          </li>
        </ul>
      </nav>

      <div className="badge">
        <div className="badge_icon">
          <GiPopcorn color="white" size={20} />
        </div>
        <p>Popcorn Addict</p>
        <button className="badge_button">View Challenges</button>
      </div>
    </aside>
  );
};

export default Sidebar;
