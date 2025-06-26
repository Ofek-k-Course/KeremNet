import express from "express";
import postRouter from "./Routes/posts";
import userRouter from "./Routes/users";

const app = express();
const port = 4000;

app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
