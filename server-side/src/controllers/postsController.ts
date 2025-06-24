import posts from "../assets/Posts.json";
import express, { Request, Response } from "express";


const getPosts = (req:Request, res:Response):void => {
  console.log(posts);
  console.log("SENDING POSTS");
  
  res.send(posts);
}

const getPostsById = (req:Request, res:Response):void => {
  const user = posts.find(post => post.id === req.params.id)
  if (!user){
    res.status(404).send('Post not found');
    return
  }
  res.send(user);
}

const getPostAuthor = (req:Request, res:Response):void =>{
  const user = posts.find(post => post.id === req.params.id)
  if (!user){
    res.status(404).send('Post not found');
    return
  }
  res.send(user.author);
}

export default {
    getPosts,
    getPostsById,
    getPostAuthor
}