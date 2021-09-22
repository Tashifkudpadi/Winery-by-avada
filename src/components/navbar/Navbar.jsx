import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <a href="#" className="active">
              home
            </a>
          </li>
          <li>
            <a href="#">vineyard</a>
          </li>
          <li>
            <a href="#">distributors</a>
          </li>
          <li>
            <a href="#">buy online</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
