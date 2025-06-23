import React, { ReactElement} from 'react'
import usePosts from '../../hooks/usePosts'
import Post from '../../Components/Post/Post'
import List from '../../Components/List/List'
import "./HomePage.css"



export const HomePage = ():ReactElement => {
    
    const Posts = usePosts()
    const PostElements= Posts.map((post) => 
        {
            return (
            <Post 
            text={post.text}
            authorName={post.authorName}
            amountOfLikes={post.likes}
            uploadTime={new Date( post.uploadTime)}
            replies = {post.replies} />)
        })
    return (
        <div className='homepage'>
            <List elements = {PostElements}></List>
        </div>
    )
}
