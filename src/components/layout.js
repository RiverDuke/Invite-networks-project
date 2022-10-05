import React from "react";
import Routes from "./routes";
import SideBar from "./sidebar";

export default function Layout() {
  return (
    <div className="wrapper">
      <SideBar />
      <div className="main_content container">
        <Routes />
      </div>
    </div>
  );
}
