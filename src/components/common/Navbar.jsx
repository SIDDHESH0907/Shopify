import React from "react";
import "./Navbar.css";
import { FaShopify } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <FaShopify />
          </div>

          <div className="navbar-name">Shop!fy</div>
        </div>
        <div className="navbar-right">
          <ul className="menu-list">
            <li>Home</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <hr className="navbar-container-hr" />
    </>
  );
}

export default Navbar;
