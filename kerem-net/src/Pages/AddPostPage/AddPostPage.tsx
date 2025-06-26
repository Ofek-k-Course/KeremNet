import { Box, Button, TextField } from "@mui/material";
import React, { ReactElement } from "react";
import "./AddPostPage.css";
export default function AddPostPage(): ReactElement {
  return (
    // <Box
    //   component="form"
    //   sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
    //   noValidate
    //   className="add-post-page"
    // >
    //   <h1>Create Post</h1>
    //   <TextField
    //     className="name-input"
    //     id="outlined-basic"
    //     label="Name"
    //     variant="outlined"
    //     size="small"
    //   />
    //   <TextField
    //     id="outlined-basic"
    //     label="Id"
    //     variant="outlined"
    //     size="small"
    //   />
    //   <TextField id="outlined-textarea" label="Text" variant="outlined" />
    // </Box>
    <Box className="add-post-page">
      <h1>Create Post</h1>
      <TextField
        className="post-input"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="Id"
        variant="outlined"
        size="small"
        className="post-input"
      />
      <TextField
        className="post-input"
        id="outlined-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
      />
      <Button
        className="sidebar-button"
        variant="outlined"
        // startIcon={<Home />}
        // onClick={() => navigate("/")}
      >
        Post
      </Button>
    </Box>
  );
}
