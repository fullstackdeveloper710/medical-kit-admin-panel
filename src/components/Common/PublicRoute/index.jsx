import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { access_token } = useSelector((state) => state.AUTH);
  if (access_token) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PublicRoute;
