import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <a className="nav-hover" href="/#">Home</a>
        </li>
        <li>
          <a className="nav-hover" href="/#">About</a>
        </li>
        <li>
          <a className="nav-hover" href="/#">Portfolio</a>
        </li>
        <li>
          <a className="nav-hover" href="/#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
