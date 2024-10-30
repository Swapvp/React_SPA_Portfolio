import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io"; // Import close icon
import "./nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-6">
            <p className="logo">WEBDEV</p>
          </div>
          <div className="col-6 text-end d-md-none">
            <button className="menuBtn" onClick={toggleMenu}>
              <FaBarsStaggered />
            </button>
          </div>
        </div>
      </div>

      {/* Slide-Out Menu */}
      <div className={`nav-menu  ${isOpen ? "open" : ""}`}>
        <button className="closeBtn" onClick={toggleMenu}>
          <IoIosClose />
        </button>
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
    </nav>
  );
};

export default Nav;
