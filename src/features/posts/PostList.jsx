import React from "react";
import { useSelector } from "react-redux";
import EachPost from "./EachPost";
import { selectAllPosts, useGetPostsQuery } from "./postsSlice";

const PostList = () => {
  const postsList = useSelector(selectAllPosts);
  const { isLoading, isSuccess } = useGetPostsQuery();
  if (isSuccess) console.log(postsList);
  return (
    <section className="flex flex-col gap-3 ">
      {postsList.map((post) => (
        <EachPost key={post.id} post={post} />
      ))}
    </section>
  );
};

export default PostList;
