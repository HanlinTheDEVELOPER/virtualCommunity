import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

import UserList from "../features/user/UserList";
import { ThemeContext } from "../context/context";

const Layout = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const styles = {
    width: "50%",
    padding: 20,
  };

  return (
    <ThemeContext.Provider value={{ darkTheme }}>
      <div
        className={`opacity-100 ${
          darkTheme ? "bg-gray-800  text-gray-400" : "bg-gray-400 text-gray-800"
        }`}
      >
        <div className="p-3">
          <h3
            className={`font-bold rounded-lg h-10 p-2.5 text-center relative shadow-light ${
              darkTheme
                ? "bg-gray-900  text-gray-300"
                : "bg-gray-300 text-gray-900"
            }`}
          >
            Virtual Community
            <span
              onClick={() => setDarkTheme((prev) => !prev)}
              className="cursor-pointer absolute right-4 top-2.5 "
            >
              {darkTheme ? (
                <BsMoonStarsFill className="text-base" />
              ) : (
                <FaSun className="text-lg" />
              )}
            </span>
          </h3>
        </div>
        <div className="flex">
          <UserList />
          <div className="w-1/2 p-5">
            <Outlet />
          </div>
          <div className="w-1/4 shadow-light rounded p-10">Helo</div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
