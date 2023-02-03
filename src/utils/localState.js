import { useState } from "react";

const useLocalState = () => {
  const [alert, setAlert] = useState({
    show: false,
    text: "",
    type: "danger",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [show, setShow] = useState(false);

  const showAlert = ({ text, type = "danger" }) => {
    setAlert({ show: true, text, type });
  };
  const hideAlert = () => {
    setAlert({ show: false, text: "", type: "danger" });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return {
    alert,
    showAlert,
    loading,
    setLoading,
    success,
    setSuccess,
    hideAlert,
    show,
    setShow,
    handleClose,
    handleShow,
  };
};

export default useLocalState;
