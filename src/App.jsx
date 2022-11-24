import React from "react";
import UserList from "./features/user/UserList";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
};

export default App;
