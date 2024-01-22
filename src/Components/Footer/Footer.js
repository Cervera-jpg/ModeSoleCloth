import React from "react";
import "./Footer.css";
import logo from "../Assets/logo.png";
import instagram_icon from "../Assets/instagram icon.png";
import facebook_icon from "../Assets/facebook1.png";
import github_icon from "../Assets/github.png";
import linkedin_icon from "../Assets/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="footer-text">
        <p>You Can Contact Us at Our Social Media Accounts</p>
      </div>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} className="icon" alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={facebook_icon} className="icon" alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={github_icon} className="icon" alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={linkedin_icon} className="icon" alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
