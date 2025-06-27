import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import "./Pages.css";
import HomePage from "./HomePage/HomePage";
import PostPage from "./PostPage/PostPage";
import AddPostPage from "./AddPostPage/AddPostPage";

export default function page(): ReactElement {
  return (
    <div className="pages">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/add-post" element={<AddPostPage />} />
      </Routes>
    </div>
  );
}
