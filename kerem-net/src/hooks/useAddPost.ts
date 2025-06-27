import { useState } from "react";
import PostData from "../Models/PostData";
import url from "../Assets/KeremNetUrl";
import HookReturn from "../Models/HookReturn";
import Status from "../Models/Status";
export default function usePostById(): HookReturn<
  (data: PostData) => Promise<void>
> {
  /* returns undefined when object has not been loaded yet */
  const [Status, setStatus] = useState<Status>("Loading");
  const [Error, setError] = useState<string | undefined>(undefined);

  const handlePost = async (data: PostData) => {
    await fetch(url + "/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    })
      .then((response) => response.json())
      .then(() => {
        setStatus("Success");
      })
      .catch((error) => {
        setStatus("Error");
        setError(String(error));
      });
  };

  return { data: handlePost, error: Error, status: Status };
}
