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
        <input type="text" placeholder="Search for kits" className="search-input" />
        <FaSearch className="search-icon" /> {/* Add the search icon */}
      </div>
      <div className="profile">
        <div className="profile-pic-container">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className=''>
        <span className="admin-name">Admin User</span>
        <span className="superadmin-name">Subname</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
