import React, { ReactElement, useMemo } from 'react'
import './Post.css'
import { Badge, Box } from '@mui/material'
import List from '../List/List'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Reply from '../Reply/Reply';
import { useNavigate } from 'react-router-dom';
import PostData from '../../Models/PostData';


export default function Post({text, author, likes, id, replies, uploadTime}:PostData):ReactElement {
    const formattedDate = useMemo(() => uploadTime.split('GMT')[0],[uploadTime])
    const navigate = useNavigate();
    const handlePostClick = () => {
        navigate(`post/${id}`,{ replace: true });
    };
    return (
        <div onClick = {handlePostClick}>
            <Box>
                <h2>{author.name}:</h2>
                <h3>{text}</h3>
                <Badge color="secondary" badgeContent={likes} showZero>
                    <FavoriteBorderIcon />
                </Badge>
                <h5>{formattedDate}</h5>
                <div className='comments'>
                    <h2>comments</h2>
                    <List 
                    elements={replies.map(reply => 
                    <Reply author={reply.author} 
                    text = {reply.text}></Reply>)}/>
                </div>
            </Box>
        </div>  
    )
}
