import express from "express";
import postController from "../Controllers/postsController";

const postRouter = express.Router();
postRouter.get("/", postController.getPosts);
postRouter.get("/:id", postController.getPostsById);
postRouter.get("/:id/author", postController.getPostAuthor);
postRouter.post("/", postController.addPost);
export default postRouter;
