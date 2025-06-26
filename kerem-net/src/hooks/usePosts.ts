import { useState, useEffect } from "react";
import PostData from "../Models/PostData";
import url from "../Assets/KeremNetUrl";
import HookReturn from "../Models/HookReturn";
import Status from "../Models/Status";

export default function usePosts(): HookReturn<PostData[] | undefined> {
  /* returns undefined when object has not been loaded yet */
  const [Posts, setPosts] = useState<PostData[] | undefined>(undefined);
  const [Status, setStatus] = useState<Status>("Loading");
  const [Error, setError] = useState<string | undefined>(undefined);
  useEffect(() => {
    fetch(url + "/api/posts", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setStatus("Success");
        setPosts(data);
      })
      .catch((error) => {
        setStatus("Error");
        setError(String(error));
      });
  }, []);
  return { data: Posts, error: Error, status: Status };
}
