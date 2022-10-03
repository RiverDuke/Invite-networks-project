import React from "react";
import Routes from "./routes";
import SideBar from "./sidebar";

export default function Layout() {
  return (
    <div>
      <SideBar />
      <Routes />
    </div>
  );
}
