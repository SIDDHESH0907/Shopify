import React from "react";
import "./Navbar.css";
import { FaShopify } from "react-icons/fa6";
import { Routes, Route, Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="link-color">
            <div className="navbar-logo">
              <FaShopify />
            </div>
          </Link>
          <Link to="/" className="link-color">
            <div className="navbar-name">Shop!fy</div>
          </Link>
        </div>
        <div className="navbar-right">
          <ul className="menu-list">
            <li>
              <NavLink to="/" className="link-color">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop" className="link-color">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="link-color">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <hr className="navbar-container-hr" />
    </>
  );
}

export default Navbar;
