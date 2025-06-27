import React, { ReactElement } from "react";
import SideBar from "./SideBar/SideBar";
import { BrowserRouter } from "react-router-dom";
import Pages from "../../Pages/Pages";
import { ToastContainer } from "react-toastify";

export default function Layout(): ReactElement {
  return (
    <>
      <BrowserRouter>
        <SideBar></SideBar>
        <Pages />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}
