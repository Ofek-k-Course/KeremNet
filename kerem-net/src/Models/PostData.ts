import replay from "./reply"
import user from "./user"
export default interface PostData { 
    id: string
    text: string
    author: user
    likes: number
    uploadTime: string
    replies:replay[]
}