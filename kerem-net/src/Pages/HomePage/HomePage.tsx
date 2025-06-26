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
                        text={post.text}
                        authorName={post.author.name}
                        amountOfLikes={post.likes}
                        uploadTime={new Date(post.uploadTime)}
                        replies = {post.replies} />)
                    })
                }></List>
        </div>
    )
}
export default HomePage;