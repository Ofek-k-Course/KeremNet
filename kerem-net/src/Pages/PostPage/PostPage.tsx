import React, { ReactElement } from 'react'
import "./PostPage.css"
import usePostById from '../../hooks/usePostById'
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';
import { Badge } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import List from '../../Components/List/List';
import Reply from '../../Components/Reply/Reply';

export default function PostPage(): ReactElement {
    const { id } = useParams();
    const Data = usePostById(id as string);

    if (!Data) {
        return (
            <div className='post-page'>
                <CircularProgress className='loadingBar' />
            </div>
        );
    }
    return (
        <div className='post-page'>
            <h1>{Data.author?.name}</h1>
            <h2>{Data.text}</h2>
            <Badge className='like-icon' color="secondary" badgeContent={Data.likes} showZero>
                <FavoriteBorderIcon fontSize='large' />
            </Badge>
            <h4>{Data.uploadTime}</h4>
            <h3 className='comment-text'>Comments</h3>
            <List elements={Data.replies?.map((reply, idx) => (
                <Reply key={reply.id || idx} author={reply.author} text={reply.text} />
            ))} />
        </div>
    );
}