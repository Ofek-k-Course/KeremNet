import reply from "./reply"

interface PostData {
    text: string
    authorName: string
    likes: number
    uploadTime: string
    replies:reply[]
}

export default PostData;