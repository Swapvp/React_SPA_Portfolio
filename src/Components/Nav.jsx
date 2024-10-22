import React from "react";

import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p className="logo">WEBDEV</p>
          </div>
          <div className="col-md-9 nav-menu">
            <ul>
              <a href="#ed">
                <li>education</li>
              </a>
              <a href="#">
                <li>skills</li>
              </a>
              <a href="#">
                <li>experience</li>
              </a>
              <a href="#">
                <li>profiles</li>
              </a>
              <a href="#">
                <li>clients</li>
              </a>
              <a href="#">
                <li>contact me</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
