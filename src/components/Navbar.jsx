import { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa"; 
import logo from '../assets/Frame.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveLink(id);
    setMenuOpen(false);
  };

  return (
    <nav className={`nav-main-container ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["home", "about", "services", "features", "pricing", "how-it-works", "faq", "blog"].map((link) => (
            <a 
              key={link}
              href={`#${link}`} 
              className={`nav-item ${activeLink === link ? "active" : ""}`} 
              onClick={(e) => { e.preventDefault(); handleScrollToSection(link); }}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>

        <button className="try-btn">Try it Free</button>
      </div>
    </nav>
  );
};

export default Navbar;
