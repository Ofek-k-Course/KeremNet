import React, { memo, ReactElement, useMemo} from 'react'
import usePosts from '../../hooks/usePosts'
import Post from '../../Components/Post/Post'
import List from '../../Components/List/List'
import "./HomePage.css"



export const HomePage = ():ReactElement => {
    const posts = usePosts()
    const postElements = useMemo(()=> posts.map((post) => 
        {
            return (
            <Post 
            text={post.text}
            authorName={post.authorName}
            amountOfLikes={post.likes}
            uploadTime={new Date(post.uploadTime)}
            replies = {post.replies} />)
        }),[posts])
    return (
        <div className='homepage'>
            <List elements = {postElements}></List>
        </div>
    )
}
