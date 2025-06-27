import React, { ReactElement } from "react";
import "./PostPage.css";
import usePostById from "../../Hooks/usePostById";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
import { Badge } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import List from "../../Components/List/List";
import Reply from "../../Components/Reply/Reply";
import ErrorToast from "../../Components/ErrorToast/ErrorToast";

export default function PostPage(): ReactElement {
  const { id } = useParams();
  const { data, status, error } = usePostById(id as string);
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
      <div className="post-page">
        <h1>{data.author?.name}</h1>
        <h2>{data.text}</h2>
        <Badge
          className="like-icon"
          color="secondary"
          badgeContent={data.likes}
          showZero
        >
          <FavoriteBorderIcon fontSize="large" />
        </Badge>
        <h4>{data.uploadTime}</h4>
        <h3 className="comment-text">Comments</h3>
        <List
          elements={data.replies?.map((reply, idx) => (
            <Reply
              key={reply.id || idx}
              author={reply.author}
              text={reply.text}
            />
          ))}
        />
      </div>
    );
  }
  return <></>;
}
