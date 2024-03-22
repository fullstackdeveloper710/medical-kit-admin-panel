// Sidebar.js

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../Assets/Logo/logo.png";
import "./Sidebar.css";
import { distributormenus, menus } from "../../utils/menu.routes";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthUser } from "../../redux/slice/AuthSlice";
import Signout from "../../Assets/icons/SignOut.png";

function Sidebar({ isActive, removeSideBarActive }) {
  const { userData } = useSelector((state) => state.AUTH);
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
    <div className={isActive ? "sidebar active" : "sidebar"}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navigation">
        {(userData && userData?.assigned_role === "superadmin") || !userData ? (
          <div className="adminmenu">
            <ul className="nav-links">
              {menus
                .filter((x, i) => i === 0)
                .map((menu, i) => {
                  return (
                    <li key={i}>
                      <Link
                        className={activeClass(menu.link)}
                        to={menu.link}
                        onClick={removeSideBarActive}
                      >
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
                        <Link
                          className={`${activeClass(menu.link)}`}
                          to={menu.link}
                          onClick={removeSideBarActive}
                        >
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
                        <Link
                          className={`${activeClass(menu.link)}`}
                          to={menu.link}
                          onClick={removeSideBarActive}
                        >
                          {menu.icon}
                          {menu.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        ) : (
          <div className="distributormenu">
            <ul className="nav-links">
              {distributormenus
                .filter((x, i) => i === 0)
                .map((menu, i) => {
                  return (
                    <li key={i}>
                      <Link
                        className={activeClass(menu.link)}
                        to={menu.link}
                        onClick={removeSideBarActive}
                      >
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
                {distributormenus
                  .filter((x, i) => i > 0 && i < 4)
                  .map((menu, i) => {
                    return (
                      <li key={i}>
                        <Link
                          className={`${activeClass(menu.link)}`}
                          to={menu.link}
                          onClick={removeSideBarActive}
                        >
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
                {distributormenus
                  .filter((x, i) => i >= 4)
                  .map((menu, i) => {
                    return (
                      <li key={i}>
                        <Link
                          className={`${activeClass(menu.link)}`}
                          to={menu.link}
                          onClick={removeSideBarActive}
                        >
                          {menu.icon}
                          {menu.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        )}
        <div
          className="logout d-flex align-items-center"
          onClick={() => logoutHandler()}
        >
          <img src={Signout}></img>
          Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
