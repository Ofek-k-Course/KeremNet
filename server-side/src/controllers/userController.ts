import { Request, Response } from "express";
import users from "../assets/Users.json";
import User from "../Models/User";

const getUsers = async (req: Request, res: Response): Promise<void> => {
  res.send(users as User[]);
};

const getUserById = async (req: Request, res: Response): Promise<void> => {
  const user: User | undefined = users.find(
    (user) => user.id === req.params.id
  );
  if (!user) {
    res.status(404).send("Post not found");
    return;
  }
  res.send(user);
};

export default {
  getUsers,
  getUserById,
};
