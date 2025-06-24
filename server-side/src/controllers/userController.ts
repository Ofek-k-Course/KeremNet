import express, { Request, Response } from "express";
import users from "../assets/Users.json"


const getUsers = (req:Request, res:Response):void =>{
    res.send(users)
}

const getUserById = (req:Request, res:Response):void =>{
  const user = users.find(user => user.id === req.params.id)
  if (!user){
    res.status(404).send('Post not found');
  }
  res.send(user);
}

export default {
    getUsers,
    getUserById
}
