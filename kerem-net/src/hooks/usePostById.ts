import { useState, useEffect } from "react";
import PostData from "../Models/PostData";
import url from "../Assets/KeremNetUrl";

export default function usePostById(id: string): PostData | undefined {
  /* returns undefined when object has not been loaded yet */
  const [Post, setPosts] = useState<PostData | undefined>(undefined);
  useEffect(() => {
    fetch(url + "/api/posts/" + id, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [id]);
  return Post;
}
