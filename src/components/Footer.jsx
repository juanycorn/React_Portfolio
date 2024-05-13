import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Juan Cornejo</p>
        <div className="social-links">
          <a href="https://github.com/juanycorn" target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/juan-cornejo-378b33b1/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} />
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;