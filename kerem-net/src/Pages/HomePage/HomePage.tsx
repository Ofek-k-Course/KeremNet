import React, { ReactElement } from "react";
import usePosts from "../../Hooks/usePosts";
import Post from "../../Components/Post/Post";
import List from "../../Components/List/List";
import "./HomePage.css";
import PostData from "../../Models/PostData";
import CircularProgress from "@mui/material/CircularProgress";
import HookReturn from "../../Models/HookReturn";
import ErrorToast from "../../Components/ErrorToast/ErrorToast";
const HomePage = (): ReactElement => {
  const { data, status, error }: HookReturn<PostData[] | undefined> =
    usePosts();

  if (status === "Error") {
    ErrorToast(error);
  }
  if (status === "Loading") {
    return (
      <div className="post-page">
        <CircularProgress className="loadingBar" />
      </div>
    );
  }
  if (status === "Success" && !!data) {
    return (
      <div className="homepage">
        <List
          elements={data.map((post) => {
            return (
              <Post
                id={post.id}
                text={post.text}
                author={post.author}
                likes={post.likes}
                uploadTime={post.uploadTime}
                replies={post.replies}
              />
            );
          })}
        ></List>
      </div>
    );
  }
  return <></>;
};
export default HomePage;
