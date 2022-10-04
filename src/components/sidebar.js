import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li>
          <a href="/home">
            <i className="fas fa-home"></i>Home
          </a>
        </li>
        <li>
          <a href="/devices">
            <i className="fas fa-project-diagram"></i>Devices
          </a>
        </li>
        <li>
          <a href="/#">
            <i className="fas fa-blog"></i>Item X
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-address-book"></i>Item Y
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-map-pin"></i>Item Z
          </a>
        </li>
      </ul>
      <div className="low-tab">
        <h4>InviteNetworks</h4>
      </div>
    </div>
    // </div>
  );
}
