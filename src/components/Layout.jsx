import UserList from "../features/user/UserList";
import { Outlet } from "react-router-dom";

import React from "react";

const h6Style = {
  borderRadius: 12,
  boxShadow: "0px 2px 4px gray",
  height: 40,
  padding: 10,
  textAlign: "center",
};

const Layout = () => {
  return (
    <>
      <div style={{ padding: 12 }}>
        <h3 style={h6Style}>Virtual Community</h3>
      </div>
      <div>
        <UserList />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
