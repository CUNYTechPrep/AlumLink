import React, { useState, useEffect } from "react";
import {
  FaPaperPlane,
  FaInfoCircle,
  FaUserCheck,
  FaTimes,
  FaSearch,
} from "react-icons/fa";
import { HiHome, HiMenu } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import "./NavBarStyles.css";
import auth from "../services/auth";

function NavBar() {
  const [clicked, setClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(auth.isAuthenticated);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const checkAuthStatus = () => {
      setIsLoggedIn(auth.isAuthenticated);
    };

    checkAuthStatus();
  }, []);

  const handleSignOut = () => {
    auth.signout().then(() => {
      setIsLoggedIn(false);
      navigate("/login"); // Redirect to login page after sign out
    });
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
          {isLoggedIn && (
            <li>
              <Link to="/directory">
                <FaSearch /> Alum Search
              </Link>
            </li>
          )}
          <li>
            <Link to="/about">
              <FaInfoCircle /> About
            </Link>
          </li>
          {!isLoggedIn ? (
            <li>
              <Link to="/login">
                <FaUserCheck /> Log In
              </Link>
            </li>
          ) : (
            <li onClick={handleSignOut}>
              <FaUserCheck /> Sign Out
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
