import replay from "./reply"
import user from "./user"
export default interface Post { 
    id: string
    text: string
    author: user
    likes: number
    uploadTime: string
    replies:replay[]
}