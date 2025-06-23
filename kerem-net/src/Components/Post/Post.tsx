import React, { ReactElement, useMemo } from 'react'
import './Post.css'
import { Badge, Box } from '@mui/material'
import List from '../List/List'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Reply from '../Reply/Reply';

interface PostProps{
    text:string
    authorName:string
    amountOfLikes:number
    uploadTime:Date
    replies:{
        author:string
        text:string
    }[]
}
export default function Post({text, authorName, amountOfLikes, uploadTime, replies}:PostProps):ReactElement {
    const memoizedDate = useMemo(() => uploadTime.toString().split('GMT')[0],[uploadTime])
    const memoizedComments = useMemo(() => replies.map(reply => <Reply author={reply.author} text = {reply.text}></Reply>),[])
    return (
        <Box>
            <h2>{authorName}:</h2>
            <h3>{text}</h3>
            <Badge color="secondary" badgeContent={amountOfLikes} showZero>
                <FavoriteBorderIcon />
            </Badge>
            <h5>{memoizedDate}</h5>
            <div className='comments'>
                <h2>comments</h2>
                <List elements={memoizedComments}></List>
            </div>
        </Box>
    )
}
