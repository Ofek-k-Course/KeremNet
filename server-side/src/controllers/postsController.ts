import posts from "../Assets/Posts.json";
import { Request, Response } from "express";
import PostData from "../Models/PostData";


const getPosts = (req:Request, res:Response):void => {
  res.send(posts as PostData[]);
}

const getPostsById = (req:Request, res:Response):void => {
  const post : PostData | undefined  = posts.find(post => post.id === req.params.id)
  if (!post){
    res.status(404).send('Post not found');
    return
  }
  res.send(post);
}

const getPostAuthor = (req:Request, res:Response):void =>{
  const post : PostData | undefined = posts.find(post => post.id === req.params.id)
  if (!post){
    res.status(404).send('Post not found');
    return
  }
  res.send(post.author);
}

export default {
    getPosts,
    getPostsById,
    getPostAuthor
}