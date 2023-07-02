import React from "react";
import style from "./index.module.scss";
import Sidebar from "../components/Sidebar";
import Profile from "../pages/Profile";

const Layout: React.FC = () => {
  return (
    <div className={`container ${style.root}`}>
      <Sidebar />
      <Profile />
    </div>
  );
};

export default Layout;
