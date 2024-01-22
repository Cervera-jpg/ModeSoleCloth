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
      <div className="footer-logo">
        <img src={logo} alt="" />
        <div className="footer-text">
          <p>You Can Contact Us At Our Social Media Accounts</p>
        </div>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={facebook_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={github_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright 2024 - All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
