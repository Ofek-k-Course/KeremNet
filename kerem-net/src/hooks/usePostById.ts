import { useState , useEffect} from 'react';
import PostData from '../Models/PostData';
import url from './KeremNetUrl';

export default function usePostById(id:string):PostData | undefined {
    const [Post , setPosts] = useState<PostData>()
    useEffect(() => {
        fetch(url+'/api/posts/' + id, {method: 'GET'})
        .then((response) => response.json())
        .then((data) => setPosts(data));
    }, [id])
    return Post 
}