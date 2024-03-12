// Sidebar.js

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../Assets/Logo/logo.png";
import "./Sidebar.css";
import { menus } from "../../utils/menu.routes";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { clearAuthUser } from "../../redux/slice/AuthSlice";
function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeClass = (link) => {
    return link === location.pathname ? "active-menu" : "";
  };

  const logoutHandler = () => {
    if (window.confirm("Are you sure you want to logout")) {
      dispatch(clearAuthUser());
      navigate("/login");
    }
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
                <li key={i}>
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
        <div
          className="logout d-flex align-items-center"
          onClick={() => logoutHandler()}
        >
          <FaSignOutAlt className="icon" />
          Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
