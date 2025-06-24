import { useState , useEffect} from 'react';
import PostData from '../Models/PostData';


export default function usePosts():PostData[]{
    const url = ""
    const [Posts , setPosts] = useState<PostData[]>([])
    useEffect(() => {
        fetch(url+'/api/posts', {method: 'GET'})
        
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPosts(data);});
    }, [])
    return Posts
}