import React from "react";

import { useSelector } from "react-redux";
import { selectAllUser } from "./userSlice";

import { useGetUsersQuery } from "./userSlice";

const userStyle = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "4px 10px",
  marginTop: 8,
  borderRadius: 12,
  boxShadow: "0px 2px 4px gray",
};

const UserList = () => {
  const user = useSelector(selectAllUser);

  const renderedUsers = user.map((user) => (
    <div style={userStyle}>
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
    <div
      style={{
        padding: 12,
        width: "25%",
        minHeight: "100vh",
        boxShadow: "2px 0px 5px rgba(0,0,0,0.25)",
      }}
    >
      <div style={userStyle}>
        <h4 style={{ paddingBlock: 10 }}>All Posts</h4>
      </div>

      {renderedUsers}
    </div>
  );
};

export default UserList;
