import React from "react";
import { useContext } from "react";

import { useSelector } from "react-redux";
import { ThemeContext } from "../../context/context";
import { selectAllUser } from "./userSlice";

const UserList = () => {
  const { darkTheme } = useContext(ThemeContext);
  const user = useSelector(selectAllUser);

  const renderedUsers = user.map((user) => (
    <div
      className={`flex items-center gap-3 py-1 px-2.5 mt-2 rounded-lg shadow-light ${
        darkTheme ? "bg-gray-900  text-gray-300" : "bg-gray-300 text-gray-900"
      }`}
      key={user?.id}
    >
      <div>
        <img src={user?.avatar} alt="" />
      </div>
      <div>
        <h5>{user?.name}</h5>
        <h5>
          <small>{user?.email}</small>
        </h5>
      </div>
    </div>
  ));

  return (
    <div className="p-3 w-1/4 min-h-screen shadow-light rounded">
      <div
        className={`flex items-center gap-3 py-1 px-2.5 mt-2 rounded-lg shadow-light ${
          darkTheme ? "bg-gray-900  text-gray-300" : "bg-gray-300 text-gray-900"
        }`}
        key={user?.id}
      >
        <h4 style={{ paddingBlock: 10 }}>All Posts</h4>
      </div>

      {renderedUsers}
    </div>
  );
};

export default UserList;
