import React, {ReactElement} from 'react'
import usePosts from '../../hooks/usePosts'
import Post from '../../Components/Post/Post'
import List from '../../Components/List/List'
import "./HomePage.css"
import PostData from '../../Models/post';



export const HomePage = ():ReactElement => {
    const posts:PostData[] = usePosts()
    const postElements = posts.map((post) => 
        {
            return (
            <Post 
            text={post.text}
            authorName={post.author.name}
            amountOfLikes={post.likes}
            uploadTime={new Date(post.uploadTime)}
            replies = {post.replies} />)
        })
    return (
        <div className='homepage'>
            <List elements = {postElements}></List>
        </div>
    )
}
