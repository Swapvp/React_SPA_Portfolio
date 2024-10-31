import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
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
          <div className="col-md-3">
            <p className="logo">WEBDEV</p>
          </div>
          <div className="d-sm-block d-md-none justify-content-end">
            <button className="menuBtn" onClick={toggleMenu}>
              <FaBarsStaggered />
            </button>
          </div>
          <div className="col-9 nav-menu d-none d-md-block">
            <ul>
              <a href="#education">
                <li>education</li>
              </a>
              <a href="#skills">
                <li>skills</li>
              </a>
              <a href="#experience">
                <li>experience</li>
              </a>
              <a href="#profiles">
                <li>profiles</li>
              </a>
              <a href="#clients">
                <li>clients</li>
              </a>
              <a href="#contact">
                <li>contact me</li>
              </a>
            </ul>
          </div>
        </div>
        {/* Slide-out Menu with transition */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <button className="closeBtn" onClick={toggleMenu}>
            <IoMdClose />
          </button>
          <ul>
            <a href="#education" onClick={toggleMenu}>
              <li>education</li>
            </a>
            <a href="#skills" onClick={toggleMenu}>
              <li>skills</li>
            </a>
            {/* <a href="#experience" onClick={toggleMenu}>
              <li>experience</li>
            </a> */}
            <a href="#profiles" onClick={toggleMenu}>
              <li>profiles</li>
            </a>
            <a href="#clients" onClick={toggleMenu}>
              <li>clients</li>
            </a>
            <a href="#contact" onClick={toggleMenu}>
              <li>contact me</li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
