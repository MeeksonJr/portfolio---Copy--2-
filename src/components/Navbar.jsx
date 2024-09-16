import React from 'react';
import { Link } from 'react-scroll';
import '../styled/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo" onClick={scrollToTop}>Mo's </h1>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link></li>
        <li><Link to="timeline" smooth={true} duration={500} onClick={closeMenu}>Timeline</Link></li>
        <li><Link to="skills" smooth={true} duration={500} onClick={closeMenu}>Skills</Link></li>
        <li><Link to="testimonials" smooth={true} duration={500} onClick={closeMenu}>Testimonials</Link></li>
        <li><Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
