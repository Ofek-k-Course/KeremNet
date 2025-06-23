import React, { ReactElement } from 'react'
import './Post.css'
import { Badge, Box } from '@mui/material'
import List from '../List/List'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface PostProps{
    text:string
    authorName:string
    likes:number
    uploadTime:Date
    replies:ReactElement[]



}
export default function Post({text, authorName, likes, uploadTime, replies}:PostProps):ReactElement {

    return (
        <Box>
            <h2>{authorName}:</h2>
            <h3>{text}</h3>
            <Badge color="secondary" badgeContent={likes} showZero>
                <FavoriteBorderIcon />
            </Badge>
            <h5>{uploadTime.toString().split('GMT')[0]}</h5>
            <div className='comments'>
                <h2>comments</h2>
                <List elements={replies}></List>
            </div>
        </Box>
    )
}
