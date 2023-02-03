import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { useUserContext } from '../context/user_context'
import { useGlobalContext } from "../context/context";
import { Layout } from "../components";

const PrivateRoutes = () => {
  const { user } = useGlobalContext();

  return user === null ? (
    <Navigate to="/" />
  ) : (
    <Layout>
      <Outlet />
    </Layout>
  );
};
export default PrivateRoutes;
