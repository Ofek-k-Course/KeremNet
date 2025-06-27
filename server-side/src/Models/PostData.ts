import reply from "./Reply";
import user from "./User";
export default interface PostData {
  id: string;
  text: string;
  author: user;
  likes: number;
  uploadTime: string;
  replies: reply[];
}
