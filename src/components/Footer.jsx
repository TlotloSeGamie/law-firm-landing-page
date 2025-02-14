import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; 
import "./Footer.css";
import logo from '../assets/Frame.png';


const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="logo">
          {/* <img src={logo} alt="Logo" /> */}
          <p>Our mission is to empower South African SMEs with accessible, affordable, and efficient legal solutions, driving seamless compliance and business growth. 
          </p>
        </div>
        <div className="navigation">
            <h4>Navigation</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#faq">FAQs</a></li>
            </ul>
        </div>
        <div className="utilities">
            <h4>Utilities</h4>
            <ul>
                <li><a href="">Terms and Conditions</a></li>
                <li><a href="">Privacy and Policy</a></li>
                <li><a href="">License</a></li>
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
        <div className="footer-border"></div>
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
