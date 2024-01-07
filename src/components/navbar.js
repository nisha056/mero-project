import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo-wrapper">
          <Link to="/"> Hello! </Link>
        </div>
        <div className="as-wrapper">
          <div className="nav-items">
            <Link to="/"> HOME </Link>
            <Link to="/about"> ABOUT </Link>
            <Link to="/experience"> EXPERIENCE </Link>
            <Link to="/project"> PROJECT </Link>
            <Link to="/contact"> CONTACT </Link>
          </div>
        </div>
        <button className="hamburger">
          <span className="bar"> </span> <span className="bar"> </span>
          <span className="bar"> </span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
