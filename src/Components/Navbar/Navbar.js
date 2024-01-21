import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import { PiPantsFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="main logo" />
      </div>
      <ul className="nav-menu">
        <li>
          Home
          <hr />
        </li>
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart} alt="cart icon" />
        <div className="nav-cart-number">0</div>
      </div>
    </div>
  );
};

export default Navbar;
