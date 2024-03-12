import React from "react";
import { useLocation } from "react-router-dom";
import RenderCreateMenus, { createMenus } from ".././utils/renderCreateMenus";
import Header from ".././components/Header/Header";
import { Card } from "react-bootstrap";
import Sidebar from ".././components/Sidebar/SideBar";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main_container">
        <Header />
        <div style={{ padding: 20 }}>
          {!createMenus[location.pathname] ? null : (
            <RenderCreateMenus pathname={location.pathname} />
          )}
          <Card
            style={{
              padding: 10,
              marginLeft: 20,
              border: "none",
              backgroundColor:
                location.pathname === "/" || location.pathname === "/reports"
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
