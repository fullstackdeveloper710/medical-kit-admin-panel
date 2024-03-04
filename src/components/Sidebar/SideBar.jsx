// Sidebar.js

import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assets/Logo/logo.png";
import "./Sidebar.css";
import { menus } from "../../utils/menu.routes";
import { FaSignOutAlt } from "react-icons/fa";
function Sidebar() {
  const location = useLocation();
  const activeClass = (link) => {
    return link === location.pathname ? "active-menu" : "";
  };
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navigation">
        <ul className="nav-links">
          {menus
            .filter((x, i) => i === 0)
            .map((menu, i) => {
              return (
                <li>
                  <Link className={activeClass(menu.link)} to={menu.link}>
                    {menu.icon}
                    {menu.title}
                  </Link>
                </li>
              );
            })}
        </ul>
        <div className="divider"></div>
        <div className="custom-div">
          <p className="sub-heading">BUSINESS SERVICES</p>
          <ul className="nav-links">
            {menus
              .filter((x, i) => i > 0 && i < 6)
              .map((menu, i) => {
                return (
                  <li key={i}>
                    <Link className={activeClass(menu.link)} to={menu.link}>
                      {menu.icon}
                      {menu.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="custom-div">
          <p className="sub-heading">UTILITIES</p>
          <ul className="nav-links">
            {menus
              .filter((x, i) => i > 5)
              .map((menu, i) => {
                return (
                  <li key={i}>
                    <Link className={activeClass(menu.link)} to={menu.link}>
                      {menu.icon}
                      {menu.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="logout d-flex align-items-center">
          <FaSignOutAlt className="icon" />
          Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
