// App.js

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useRoutes,
  BrowserRouter,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/SideBar";
import Users from "./pages/UserManagement/Users";
import Products from "./pages/Products/Products";
import "./App.css";
import Header from "./components/Header/Header";
import Kits from "./pages/KitManagement/Kits";
import Dashboard from "./pages/Dashboard/Dashboard";
import MessageCentre from "./pages/MessageCentre/MessageCentre";
import EditArticle from "./pages/MessageCentre/EditArticle/EditArticle";
import BusinessProfile from "./pages/BusinessProfile";
import EditNotification from "./pages/MessageCentre/EditNotification/EditNotification";
import Resource from "./pages/ResourceManagement/Resource";
import Distributor from "./pages/Distributors/Distributor";
import Reports from "./pages/ReportManagement/Reports";
import { Card } from "react-bootstrap";
import RenderCreateMenus from "./utils/renderCreateMenus";
import Notifications from "./pages/Notifications/Notification";
function App(props) {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main_container">
        {/* Use Routes instead of Switch */}
        <Header />
        <div style={{ padding: 20 }}>
          <RenderCreateMenus pathname={location.pathname} />
          <Card
            style={{
              padding: 10,
              marginLeft: 20,
              border: "none",
              backgroundColor:
                location.pathname === "/" || location.pathname == "/reports"
                  ? "transparent"
                  : "white",
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
              <Route path="/kit" element={<Kits />} />
              <Route path="/messaging" element={<MessageCentre />} />
              <Route path="/editor" element={<EditArticle />} />
              <Route path="/businessprofile" element={<BusinessProfile />} />
              <Route path="/edit-notification" element={<EditNotification />} />
              <Route path="/resource" element={<Resource />} />
              <Route path="/distributors" element={<Distributor />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/notifications" element={<Notifications />} />

            </Routes>
          </Card>
        </div>
      </div>
    </div>

    // <Router>
    //  </Router>
  );
}
export default App;
