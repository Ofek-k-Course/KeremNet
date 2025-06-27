import React, { ReactElement } from "react";
import HomePage from "./HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import PostPage from "./PostPage/PostPage";
import "./Pages.css";

export default function page(): ReactElement {
  return (
    <div className="pages">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}
