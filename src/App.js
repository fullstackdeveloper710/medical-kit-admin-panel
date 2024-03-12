import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-phone-input-2/lib/style.css";

import RouterData from "./router";
function App() {
  return (
    <Routes>
      {RouterData.map((curElm, index) => (
        <Route key={index} path={curElm.path} element={curElm.element} />
      ))}
    </Routes>
  );
}
export default App;
