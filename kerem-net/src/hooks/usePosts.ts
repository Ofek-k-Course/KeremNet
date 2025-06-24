import { useState , useEffect} from 'react';
import postModel from '../Models/post';





export default function usePosts():postModel[]{
    const url = "http://localhost:4000"
    const [Posts , setPosts] = useState<postModel[]>([])
    useEffect(() => {
        fetch(url+'/api/posts', {method: 'GET'})
        
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPosts(data);});
    }, [])
    return (Posts)
}