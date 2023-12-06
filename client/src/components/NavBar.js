import React, { useState } from "react";
import { FaPaperPlane, FaIdBadge, FaInfoCircle, FaUserCheck, FaTimes, FaSearch } from "react-icons/fa";
import { HiHome, HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom"; // Import Link
import "./NavBarStyles.css";

function NavBar() {
  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  return (
    <div className="NavBar">
      <nav className="NavbarItems">
        <h1 className="logotext">
          AlumLink <FaPaperPlane />
        </h1>
        <div className="menu-icons" onClick={toggleMenu}>
          {clicked ? (
            <FaTimes className="Cancel" />
          ) : (
            <HiMenu className="Hamburger" />
          )}
        </div>
        <ul className={`nav-menu ${clicked ? "active" : ""}`}>
          <li>
            <Link to="/">
              <HiHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/directory">
              <FaSearch /> Alum
            </Link>
          </li>
          <li>
            <Link to="/profile:id">
              <FaIdBadge /> Alum
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaInfoCircle /> About
            </Link>
          </li>
          <li>
            <Link to="/login">
              <FaUserCheck /> Log In
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
