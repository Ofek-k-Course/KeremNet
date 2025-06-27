import { Box, Button, TextField } from "@mui/material";
import React, { ReactElement, useState } from "react";
import "./AddPostPage.css";
import useAddPost from "../../Hooks/useAddPost";
import PostData from "../../Models/PostData";
import ErrorToast from "../../Components/ErrorToast/ErrorToast";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function AddPostPage(): ReactElement {
  const { data: sendData, error, status } = useAddPost();
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>();
  const [text, setText] = useState<string>("");
  const navigate = useNavigate();

  const HandlePost = async () => {
    if (!name || !id || !text) {
      ErrorToast("All Post entries need to be filled");
      return;
    }
    const post: PostData = {
      author: { id: id, name: name },
      id: uuidv4(),
      likes: 0,
      replies: [],
      text: text,
      uploadTime: new Date().toUTCString(),
    };
    await sendData(post);
  };

  if (status === "Error") {
    ErrorToast(error);
  }
  if (status === "Success") {
    navigate("/");
  }
  return (
    <Box className="add-post-page">
      <h1>Create Post</h1>
      <TextField
        className="post-input"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        size="small"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Id"
        variant="outlined"
        size="small"
        className="post-input"
        onChange={(e) => setId(e.target.value)}
      />
      <TextField
        className="post-input"
        id="outlined-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        className="sidebar-button"
        variant="outlined"
        // startIcon={<Home />}
        onClick={HandlePost}
      >
        Post
      </Button>
    </Box>
  );
}
