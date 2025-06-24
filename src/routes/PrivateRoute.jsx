import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../pages/Shared/Loader";

function PrivateRoute({ children }) {
  const { user, loading } = use(AuthContext);

  const location = useLocation();
  console.log(location);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/signin" state={location.pathname} />;
  }
  return children;
}

export default PrivateRoute;
