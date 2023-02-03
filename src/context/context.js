import axios from "axios";
import React, { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  // const [user, setUser] = useState(null);
  const [user, setUser] = useState({
    // Active: "",
    // Annual_Balance: "",
    // Annual_Prebalance: "",
    // Approver_Leaves_Id: "",
    // CreateBy: "",
    // CreateDate: "",
    // Department: "",
    // Email: "",
    // Email_Notification: "",
    // Features: "",
    // Id: "",
    // LastLogin: "",
    // Password: "",
    // Phone: "",
    // Role: "",
    // SickLeave_Balance: "",
    // SickLeave_Prebalance: "",
    // Supervisor: "",
    // UserId: "",
    // User_Group: "",
    // Username: "",
  });
  const navigate = useNavigate();
  const saveUser = (user) => {
    setUser(user);
  };
  console.log("----------------User----------------");
  console.log(user);

  const removeUser = () => {
    setUser(null);
  };

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`/api/v1/user/showCurrentUser`);
      saveUser(data.user);
      console.log("cookies in browser");
      console.log(data);
    } catch (error) {
      removeUser();
    }
    setIsLoading(false);
  };

  const logoutUser = async () => {
    try {
      await axios.get("/api/v1/auth/logout");
      removeUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toastNotification = (text, type) => {
    if (type === "error" && text.startsWith("Proxy error")) {
      toast.error("500 – internal server error", { position: "top-center" });
    } else if (type === "error") {
      toast.error(text, { position: "top-center" });
    } else
      toast.success(text, {
        position: "top-center",
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        saveUser,
        user,
        logoutUser,
        toastNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
