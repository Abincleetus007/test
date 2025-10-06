import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../data/logo.png"; // adjust path if needed

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo" onClick={() => setActiveSection("home")}>
  <Link to="/" className="logo-link">
    <img 
      src={require("../data/logo.png")} 
      alt="Crystal Builders Logo" 
      className="logo-img"
    />
    <span className="logo-text">Crystal Builders</span>
  </Link>
</div>


        {/* Hamburger (mobile) */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Overlay */}
        {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

        {/* Menu */}
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link
              to="/"
              className={activeSection === "home" ? "nav-link active" : "nav-link"}
              onClick={() => handleNavClick("home")}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className={activeSection === "services" ? "nav-link active" : "nav-link"}
              onClick={() => handleNavClick("services")}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={activeSection === "projects" ? "nav-link active" : "nav-link"}
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={activeSection === "about" ? "nav-link active" : "nav-link"}
              onClick={() => handleNavClick("about")}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={activeSection === "contact" ? "nav-link active" : "nav-link"}
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
