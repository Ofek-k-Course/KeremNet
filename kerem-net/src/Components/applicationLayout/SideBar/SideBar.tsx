import React from "react";
import "./SideBar.css";
import logo from "../../../Assets/logo.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BugReport, Home, AddCircleOutlineOutlined } from "@mui/icons-material";
export default function SideBar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar-body">
      <div className="sidebar-top">
        <img className="logoimage" src={logo} alt="logo"></img>
        <h1>KeremNet</h1>
      </div>
      <div className="sidebar-content">
        <Button
          className="sidebar-button"
          variant="outlined"
          startIcon={<Home />}
          onClick={() => navigate("/")}
        >
          Home
        </Button>
        <Button
          className="sidebar-button"
          variant="outlined"
          startIcon={<BugReport />}
          onClick={() => navigate("/test")}
        >
          Test
        </Button>
        <Button
          className="sidebar-button"
          variant="outlined"
          startIcon={<AddCircleOutlineOutlined />}
          onClick={() => navigate("/add-post")}
        >
          Create Post
        </Button>
      </div>
    </div>
  );
}
