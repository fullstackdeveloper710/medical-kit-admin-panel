import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { access_token } = useSelector((state) => state.AUTH);
  if (!access_token) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
