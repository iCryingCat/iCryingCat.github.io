import type Author from "../../interfaces/author";
import PostTitle from "./post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <PostTitle>{title}</PostTitle>
  );
};

export default PostHeader;
