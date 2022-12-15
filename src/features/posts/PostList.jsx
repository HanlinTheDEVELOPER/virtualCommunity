import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts, useGetPostsQuery } from "./postsSlice";

const PostList = () => {
  const postsList = useSelector(selectAllPosts);
  const { isLoading, isSuccess } = useGetPostsQuery();
  if (isSuccess) console.log(postsList);
  return <section>Helelo</section>;
};

export default PostList;
