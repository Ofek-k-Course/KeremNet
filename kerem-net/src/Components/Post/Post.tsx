import React, { ReactElement, useMemo } from 'react'
import './Post.css'
import { Badge, Box } from '@mui/material'
import List from '../List/List'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Reply from '../Reply/Reply';
import ReplayModel from "../../Models/reply"
interface PostProps{
    text:string
    authorName:string
    amountOfLikes:number
    uploadTime:Date
    replies:ReplayModel[]
}
export default function Post({text, authorName, amountOfLikes, uploadTime, replies}:PostProps):ReactElement {
    const formattedDate = useMemo(() => uploadTime.toString().split('GMT')[0],[uploadTime])
    return (
        <Box>
            <h2>{authorName}:</h2>
            <h3>{text}</h3>
            <Badge color="secondary" badgeContent={amountOfLikes} showZero>
                <FavoriteBorderIcon />
            </Badge>
            <h5>{formattedDate}</h5>
            <div className='comments'>
                <h2>comments</h2>
                <List 
                elements={replies.map(reply => <Reply author={reply.author} text = {reply.text}></Reply>)}/>
            </div>
        </Box>
    )
}
