import "./App.css";
import { useEffect } from "react";
import { Layout } from "./components";
import { Home, Login, PrivateRoutes, UserManagement, Error } from "./pages";
import { Navigate, useLocation, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalContext } from "./context/context";
import useLocalState from "./utils/localState";

function App() {
  const { user, logoutUser, isLoading } = useGlobalContext();
  // const { show } = useLocalState();
  const role = "HR";
  console.log("----------test----------");
  console.log(user);
  // user_management.includes(user?.Role) ? (
  //   <UserManagement />
  // ) : (
  //   <Navigate to="/home" />
  // )
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/users/management" element={<UserManagement />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
export default App;
