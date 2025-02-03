import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; 
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="logo">
          <h4 className="logo-text">LOGO P/UM</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="navigation">
            <h4>Navigation</h4>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQs</li>
            </ul>
        </div>
        <div className="utilities">
            <h4>Utilities</h4>
            <ul>
                <li>Terms and Conditions</li>
                <li>Privacy and Policy</li>
                <li>Universe</li>
            </ul>
        </div>
        <div className="subscribe">
            <input
                id="subname"
                placeholder="enter your name"
            />
            <button className="sub-btn">Subscribe</button>
        </div>
      </div>
      
      <div className="rite-socials">
        <p>© 2024 Your Company. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
