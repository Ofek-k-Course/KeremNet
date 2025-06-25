import { useState , useEffect} from 'react';
import PostData from '../Models/PostData';
import url from './KeremNetUrl';

export default function usePosts():PostData[]{

    const [Posts , setPosts] = useState<PostData[]>([])
    useEffect(() => {
        fetch(url+'/api/posts', {method: 'GET'})
        
        .then((response) => response.json())
        .then((data) => {
            setPosts(data);});
    }, [])
    return Posts
}