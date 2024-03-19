import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RenderCreateMenus, { createMenus } from ".././utils/renderCreateMenus";
import Header from ".././components/Header/Header";
import { Card } from "react-bootstrap";
import Sidebar from ".././components/Sidebar/SideBar";
import "../layout/style.css";
import { authUser } from "../redux/slice/AuthSlice";
import { useDispatch } from "react-redux";

const Layout = ({ children }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const removeSideBarActive = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    dispatch(authUser());
  }, []);

  return (
    <div className="wrapper">
      <Sidebar isActive={isActive} removeSideBarActive={removeSideBarActive} />
      <div className="main_container">
        <Header isActive={isActive} toggleClass={toggleClass} />
        <div className="right_content_wrapper" style={{ padding: 20 }}>
          {!createMenus[location.pathname] ? null : (
            <RenderCreateMenus pathname={location.pathname} />
          )}
          <Card
            className="content_block"
            style={{
              padding: 10,
              border: "none",
              backgroundColor:
                location.pathname === "/" ||
                location.pathname === "/reports" ||
                location.pathname === "/resource" ||
                location.pathname === "/edit-notification"
                  ? "transparent"
                  : "white",
            }}
          >
            {children}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Layout;
