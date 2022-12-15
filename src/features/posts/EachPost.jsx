import React from "react";
import { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { parseISO, formatDistanceToNow, set } from "date-fns";
import { BiUpvote, BiDownvote } from "react-icons/bi";

import { ThemeContext } from "../../context/context";
import { selectUserById } from "../user/userSlice";

const EachPost = ({ post }) => {
  const { darkTheme } = useContext(ThemeContext);
  const user = useSelector((state) => selectUserById(state, post.userId));
  console.log(user);
  return (
    <div
      className={`rounded-lg w-100 shadow-light p-2.5 flex flex-col items-center justify-center ${
        darkTheme ? "bg-gray-900  text-gray-300" : "bg-gray-300 text-gray-900"
      }`}
    >
      <User user={user} post={post} />
      <Description description={post?.content} />

      <Votes />
    </div>
  );
};

export default EachPost;

const User = ({ user, post }) => {
  return (
    <div className="w-full flex items-center gap-3">
      <div>
        <img src={user?.avatar} alt="" />
      </div>
      <div className="w-4/5">
        <h4 className="font-bold">{user?.name}</h4>
        <h5>
          <TimeAgo time={post?.date} />
        </h5>
      </div>
    </div>
  );
};

const TimeAgo = ({ time }) => {
  let timeAgo = "";
  if (time) {
    const date = parseISO(time);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <span title={time}>
      <i>{timeAgo}</i>
    </span>
  );
};

const Description = ({ description }) => {
  const [showAllContent, setShowAllContent] = useState(false);
  useEffect(() => {
    if (description.length < 150) setShowAllContent(true);
  }, []);
  return (
    <div
      className="p-5"
      onClick={() => {
        if (description.length > 150) setShowAllContent((prev) => !prev);
      }}
    >
      {showAllContent ? description : description.substr(0, 150)}
      {!showAllContent && (
        <span className="italic font-semibold ml-4 cursor-pointer">
          See More
        </span>
      )}
    </div>
  );
};

const Votes = () => {
  return (
    <div className="flex w-full justify-start px-4 gap-1 text-2xl">
      <BiUpvote />
      <BiDownvote />
    </div>
  );
};
