import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Contact Me</h3>
        <p className="address">
          Govt Polytechnic, Kanth Road ,Moradabad
        </p>
        <p>
          <strong>Email:</strong> poorviag19@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> 9084760160
        </p>
      </div>
      <div className="footer-socials">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/poorvi-ag19/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Poorvi Agarwal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
