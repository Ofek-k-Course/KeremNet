import { useState, useEffect } from "react";
import PostData from "../Models/PostData";
import url from "../Assets/KeremNetUrl";
import HookReturn from "../Models/HookReturn";
import Status from "../Models/Status";
export default function usePostById(
  id: string
): HookReturn<PostData | undefined> {
  /* returns undefined when object has not been loaded yet */
  const [Post, setPosts] = useState<PostData | undefined>(undefined);
  const [Status, setStatus] = useState<Status>("Loading");
  const [Error, setError] = useState<string | undefined>(undefined);
  useEffect(() => {
    fetch(url + "/api/posts/" + id, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setStatus("Success");
        setPosts(data);
      })
      .catch((error) => {
        setStatus("Error");
        setError(String(error));
      });
  }, [id]);
  return { data: Post, error: Error, status: Status };
}
