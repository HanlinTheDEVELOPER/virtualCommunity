import React from "react";
import UserList from "./features/user/UserList";
import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import PostList from "./features/posts/PostList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />
        <Route path="/:id" element={<Navigate element={<Layout />} />} />
      </Route>
    </Routes>
  );
};

export default App;
