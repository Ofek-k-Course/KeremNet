import React, { ReactElement } from 'react'
import Post from '../../Components/Post/Post'
import usePostById from '../../hooks/usePostById'
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';


export default function PostPage():ReactElement {
    const {id} = useParams()
    const Data = usePostById(id as string)
return (
    
    <div className='PostPage'>
    {!Data ? <CircularProgress className='loadingBar'/> : <></>}
    {!!Data ? 
        <>
            <h1>PostPage</h1>
            <Post 
                id={Data.id}
                text={Data.text}
                author={Data.author}
                likes={Data.likes}
                uploadTime={Data.uploadTime}
                replies={Data.replies} />
        </>
        : <></>}
    </div>
);
}