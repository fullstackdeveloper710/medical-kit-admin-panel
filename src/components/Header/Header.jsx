// Header.js

import React from 'react';
import { FaUserCircle, FaSearch } from 'react-icons/fa'; // Import FaSearch icon
import { Link } from 'react-router-dom';
import profilePic from '../../Assets/Profile/profile.png'; 
import './Header.css'; // Import CSS file for styling

function Header() {
  return (
    <div className="header">
      <div className="search">
        <input type="text" placeholder="Search " className="search-input" />
        <FaSearch className="search-icon" /> 
      </div>
      <div className="profile">
        <div className="profile-pic-container">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className=''>
        <span className="admin-name">Tom Jackman</span>
        <span className="superadmin-name">Super Admin</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
