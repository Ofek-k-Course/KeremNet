import { Request, Response } from "express";
import users from "../assets/Users.json"
import User from "../Models/User";

const getUsers = (req:Request, res:Response):void =>{
    res.send(users as User[])
}

const getUserById = (req:Request, res:Response):void =>{
  const user: User | undefined = users.find(user => user.id === req.params.id)
  if (!user){
    res.status(404).send('Post not found');
    return
  }
  res.send(user);
}

export default {
    getUsers,
    getUserById
}
