import React from 'react';
import './footer.css'; 

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-column">
        <h2>Resources</h2>
        <ul>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Tutorials</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h2>Contacts</h2>
        <address>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </address>
      </div>
      <div className="footer-column">
        <h2>Download App</h2>
        <ul>
          <li><a href="#">iOS App</a></li>
          <li><a href="#">Android App</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h2>Subscribe</h2>
        <form className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-column">
        <h2>Follow Us</h2>
        <ul className="social-links">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
