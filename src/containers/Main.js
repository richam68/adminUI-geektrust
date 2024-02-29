import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserManagementInterface from "../components/UserInterface";

function Main() {
  return (
    <div className="Main">
      <UserManagementInterface />
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default Main;
