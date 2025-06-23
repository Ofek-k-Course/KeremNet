import { useState } from 'react';
import data from "../Assets/Posts.json";
import replay from '../Models/reply';


interface PostData { text: string
    authorName: string
    likes: number
    uploadTime: string
    replies:replay[]
}
export default function usePosts():PostData[]{
    const [Posts] = useState<PostData[]>(data)
    return (Posts)
}