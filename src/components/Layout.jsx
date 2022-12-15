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
const styles = {
  width: "50%",
  padding: 20,
};

const Layout = () => {
  return (
    <>
      <div style={{ padding: 12 }}>
        <h3 style={h6Style}>Virtual Community</h3>
      </div>
      <div style={{ display: "flex" }}>
        <UserList />
        <div style={styles}>
          <Outlet />
        </div>
        <div style={{ width: "30%" }}>Helo</div>
      </div>
    </>
  );
};

export default Layout;
