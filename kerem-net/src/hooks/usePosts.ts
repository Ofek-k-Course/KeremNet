import { useState , useEffect} from 'react';
import reply from '../Models/reply';


interface PostData { text: string
    authorName: string
    likes: number
    uploadTime: string
    replies:reply[]
}


export default function usePosts():PostData[]{
    const url = "https://662673e1-d8de-46db-9977-545b509e5eec.mock.pstmn.io"
    const [Posts , setPosts] = useState<PostData[]>([])
    useEffect(() => {
        fetch(url+'/api/posts', {method: 'GET'})
        .then((response) => response.json())
        .then((data) => {
            setPosts(data);
            console.log(data);});
    }, [])
    return (Posts)
}