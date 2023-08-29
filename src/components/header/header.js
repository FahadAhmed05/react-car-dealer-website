import React, { useState } from "react";
import "./header.css";
import logo from "../../images/logo.jpeg";

function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="Logo" />
        <button
          className={`mobile-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}>
            Menu
          </i>
        </button>
        <nav className={`links ${isMobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="#">Widgets</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Cars</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <button className="button">Sell your car</button>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default App;
