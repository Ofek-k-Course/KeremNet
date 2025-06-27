import posts from "../Assets/Posts.json";
import { Request, Response } from "express";
import PostData from "../Models/PostData";

const getPosts = async (req: Request, res: Response): Promise<void> => {
  res.send(posts as PostData[]);
};

const getPostsById = async (req: Request, res: Response): Promise<void> => {
  const post: PostData | undefined = posts.find(
    (post) => post.id === req.params.id
  );
  if (!post) {
    res.status(404).send("Post not found");
    return;
  }
  res.send(post);
};

const getPostAuthor = async (req: Request, res: Response): Promise<void> => {
  const post: PostData | undefined = posts.find(
    (post) => post.id === req.params.id
  );
  if (!post) {
    res.status(404).send("Post not found");
    return;
  }
  res.send(post.author);
};

const addPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const newPost: PostData = req.body;
    if (newPost) {
      posts.push(newPost);
      res.status(201).json({ message: "post added successfully!" });
    } else {
      res.status(500).json({ message: "error adding post" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error when posting new post" });
  }
};

export default {
  getPosts,
  getPostsById,
  getPostAuthor,
  addPost,
};
