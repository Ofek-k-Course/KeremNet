import express from "express";
import userController from "../Controllers/userController";

const userRouter = express.Router();
userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getUserById);

export default userRouter;
