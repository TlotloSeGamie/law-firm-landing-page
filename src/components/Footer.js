import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; 
import "./Footer.css";
import logo from '../assets/Frame.png';


const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="logo">
          {/* <h4 className="logo-text">LOGO P/UM</h4> */}
          <img src={logo} alt="Logo" />
          <p>Our mission is to empower South African SMEs with accessible, affordable, and efficient legal solutions, driving seamless compliance and business growth. 
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
        <div className="subscription">
          <h4>Subscribe to our news letter.</h4>
            <div className="subscribe">
              <input
                  id="subname"
                  placeholder="enter your name"
              />
              <button className="sub-btn">Subscribe</button>
            </div>
        </div>
      </div>
        <div className="border"></div>
      <div className="right-socials">
        <div className="rights">
          <p>copyright 2025 start up</p>
        </div>
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
