import React from 'react'
import "./main.css";

const Main = () => {
  return (
    <>
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
  )
}

export default Main