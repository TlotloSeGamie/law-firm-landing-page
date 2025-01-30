import { React, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <nav className="nav-main-container">
      <div className="nav-container">
        <div className="logo">
          <h3 className="logo-text">LOGO P/UM</h3>
        </div>
        <div className="nav-links">
          <a 
            href="#" 
            className={`nav-item ${activeLink === "home" ? "active" : ""}`} 
            onClick={() => setActiveLink("home")}
          >
            Home
          </a>
          <a 
            href="about" 
            className={`nav-item ${activeLink === "about" ? "active" : ""}`} 
            onClick={() => setActiveLink("about")}
          >
            About
          </a>
          <a 
            href="services" 
            className={`nav-item ${activeLink === "services" ? "active" : ""}`} 
            onClick={() => setActiveLink("services")}
          >
            Services
          </a>
          <a 
            href="features" 
            className={`nav-item ${activeLink === "features" ? "active" : ""}`} 
            onClick={() => setActiveLink("features")}
          >
            Features
          </a>
          <a 
            href="pricing" 
            className={`nav-item ${activeLink === "pricing" ? "active" : ""}`} 
            onClick={() => setActiveLink("pricing")}
          >
            Pricing
          </a>
          <a 
            href="how-it-works" 
            className={`nav-item ${activeLink === "how-it-works" ? "active" : ""}`} 
            onClick={() => setActiveLink("how-it-works")}
          >
            How it works
          </a>
          <a 
            href="faq" 
            className={`nav-item ${activeLink === "faq" ? "active" : ""}`} 
            onClick={() => setActiveLink("faq")}
          >
            FAQ
          </a>
          <a 
            href="blog" 
            className={`nav-item ${activeLink === "blog" ? "active" : ""}`} 
            onClick={() => setActiveLink("blog")}
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
