import { Link, useLocation } from "react-router-dom";
import { useState } from "react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">▲</span>
          <span className="logo-text">ModernApp</span>
        </Link>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            
            <span className="link-text">Home</span>
          </Link>

          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            
            <span className="link-text">About</span>
          </Link>

          <Link
            to="/contact"
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            
            <span className="link-text">Contact</span>
          </Link>

          <Link
            to="/services"
            className={`nav-link ${
              location.pathname === "/services" ? "active" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            
            <span className="link-text">Services</span>
          </Link>

          <Link
            to="/blog"
            className={`nav-link ${
              location.pathname === "/blog" ? "active" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            
            <span className="link-text">Blog</span>
          </Link>
        </div>

        <div className="nav-actions">
          <button className="btn-primary">Get Started</button>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
