import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { localData } = useSelector((state) => state.AUTH);
  if (!localData) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
