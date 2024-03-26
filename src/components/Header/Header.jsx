// Header.js
import React from "react";
import { FaUserCircle, FaSearch, FaBars } from "react-icons/fa"; // Import FaSearch icon
import { Link } from "react-router-dom";
import profilePic from "../../Assets/Profile/profile.png";
import "./Header.css"; // Import CSS file for styling
import { useSelector } from "react-redux";

function Header({isActive, toggleClass}) {
  const { userData } = useSelector((state) => state.AUTH);
  return (
    <div className="header">
      <div className="search">
        <input
          type="text"
          placeholder="Search for product "
          className="search-input"
        />
        <FaSearch className="search-icon" />
      </div>
      <div className='right_block_header d-flex align-items-center'>
      <div className="profile">
        <div className="profile-pic-container">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="">
          <span className="admin-name">
            {userData && userData.first_name + " " + userData.last_name}
          </span>
          <span className="superadmin-name">
            {userData && userData.assigned_role}
          </span>
        </div>
        
      </div>
      <div className="menu_toggle ms-5 d-block d-lg-none">
      <FaBars  className={`toggle_icon ${isActive ? 'active' : ''}`}  onClick={toggleClass}/>
      </div>
      </div>
    </div>
  );
}

export default Header;
