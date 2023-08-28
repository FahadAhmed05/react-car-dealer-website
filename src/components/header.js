import React, { useState } from "react";
import "./header.css";
import logo from "../images/logo.jpeg";

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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
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

      <main id="main">
        <div className="main">
          <h1>Find The Best Cars Buy And Sell Near By You</h1>
          <p>
            It is a long establishd fact that a reader will be distracted by the
            when looking at its layout
          </p>
        </div>
        <div className="car-search">
          <div className="tabs">
            <div className="tab">New Car</div>
            <div className="tab hidden">Used Car</div>
          </div>
          <div className="selectors-cover">
            <div className="selectors-and-search">
              <div className="selectors">
                <div className="selector">
                  <select id="pricing">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div className="selector">
                  <select id="location">
                    <option value="city">City</option>
                    <option value="suburb">Suburb</option>
                    <option value="rural">Rural</option>
                  </select>
                </div>
                <div className="selector">
                  <select id="seating">
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <button className="search-input">Search</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
