import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const Error = () => {
  const { user } = useGlobalContext();
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col border-2 border-white items-center justify-center h-screen w-screen">
        <h1>404</h1>
        <h4>page not found</h4>
        <Link
          to={user === null ? "/" : "/home"}
          className="border-2 rounded p-2 m-1 bg-emerald-100"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
