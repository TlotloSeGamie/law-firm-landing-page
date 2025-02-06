import { React, useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa"; 
import logo from '../assets/Frame.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-main-container">
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a 
            href="#" 
            className={`nav-item ${activeLink === "home" ? "active" : ""}`} 
            onClick={() => { setActiveLink("home"); setMenuOpen(false); }}
          >
            Home
          </a>
          <a 
            href="about" 
            className={`nav-item ${activeLink === "about" ? "active" : ""}`} 
            onClick={() => { setActiveLink("about"); setMenuOpen(false); }}
          >
            About
          </a>
          <a 
            href="services" 
            className={`nav-item ${activeLink === "services" ? "active" : ""}`} 
            onClick={() => { setActiveLink("services"); setMenuOpen(false); }}
          >
            Services
          </a>
          <a 
            href="features" 
            className={`nav-item ${activeLink === "features" ? "active" : ""}`} 
            onClick={() => { setActiveLink("features"); setMenuOpen(false); }}
          >
            Features
          </a>
          <a 
            href="pricing" 
            className={`nav-item ${activeLink === "pricing" ? "active" : ""}`} 
            onClick={() => { setActiveLink("pricing"); setMenuOpen(false); }}
          >
            Pricing
          </a>
          <a 
            href="how-it-works" 
            className={`nav-item ${activeLink === "how-it-works" ? "active" : ""}`} 
            onClick={() => { setActiveLink("how-it-works"); setMenuOpen(false); }}
          >
            How it works
          </a>
          <a 
            href="faq" 
            className={`nav-item ${activeLink === "faq" ? "active" : ""}`} 
            onClick={() => { setActiveLink("faq"); setMenuOpen(false); }}
          >
            FAQ
          </a>
          <a 
            href="blog" 
            className={`nav-item ${activeLink === "blog" ? "active" : ""}`} 
            onClick={() => { setActiveLink("blog"); setMenuOpen(false); }}
          >
            Blog
          </a>
        </div>

        <button className="try-btn">Try it Free</button>
      </div>
    </nav>
  );
};

export default Navbar;
