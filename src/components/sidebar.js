import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="col-2 mt-2">
      <nav className="nav flex-column border border-primary">
        <Link className="nav-link active" to="/devices">
          Devices
        </Link>
        <a className="nav-link" href="#">
          Link
        </a>
        <a className="nav-link" href="#">
          Link
        </a>
        <a className="nav-link disabled">Disabled</a>
      </nav>
    </div>
  );
}
