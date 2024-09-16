import React from 'react';
import './../styled/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com/MeeksonJr" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mohamed-datt-b60907296" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:your-d.mohamed1504@gmail.com">
            Email
          </a>
          <a href="tel:+5187049000">
            Phone
          </a>
        </div>
        <div className="footer-copy">
          <p>&copy; 2024 Mo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
