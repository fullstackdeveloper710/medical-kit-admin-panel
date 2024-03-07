import React  from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/SideBar";
import "./App.css";
import "react-phone-input-2/lib/style.css";
import Header from "./components/Header/Header";
import { Card } from "react-bootstrap";
import RenderCreateMenus, { createMenus } from "./utils/renderCreateMenus";
import RouterData from "./router";
import Login from "./pages/Login";
function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/login" ? (
        <div className="auth">
          <Login />
        </div>
      ) : (
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
                    location.pathname === "/" ||
                    location.pathname === "/reports"
                      ? "transparent"
                      : "white",
                }}
              >
                <Routes>
                  {RouterData.map((curElm, index) => (
                    <Route
                      key={index}
                      path={curElm.path}
                      element={curElm.element}
                    />
                  ))}
                </Routes>
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default App;