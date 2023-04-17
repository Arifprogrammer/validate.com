import React, { useContext } from "react";
import { AuthContext } from "../../Providers/Providers";
import { Navigate } from "react-router-dom";

const ShopParent = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default ShopParent;
