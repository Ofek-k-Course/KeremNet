import React, {ReactElement} from 'react'
import usePosts from '../../Hooks/usePosts'
import Post from '../../Components/Post/Post'
import List from '../../Components/List/List'
import "./HomePage.css"
import PostData from '../../Models/PostData';

const HomePage = ():ReactElement => {
    const posts:PostData[] = usePosts()
    return (
        <div className='homepage'>
            <List elements = {
                posts.map((post) => 
                    {
                        return (
                        <Post 
                        id = {post.id}
                        text={post.text}
                        author={post.author}
                        likes={post.likes}
                        uploadTime={post.uploadTime}
                        replies = {post.replies} />)
                    })
                }></List>
        </div>
    )
}
export default HomePage;