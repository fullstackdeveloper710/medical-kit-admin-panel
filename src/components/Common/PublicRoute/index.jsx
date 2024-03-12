import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { localData } = useSelector((state) => state.AUTH);
  if (localData) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PublicRoute;
