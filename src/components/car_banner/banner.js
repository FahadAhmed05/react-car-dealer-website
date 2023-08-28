import React from 'react';
import './banner.css';
import banner_img from "../../images/banner2.jpg";

function Banner() {
  return (
    <>
    <h1 className='center'>Welcome to Our Banner</h1>
    <p className='center'>Explore our amazing content and offers.</p>

    <div className="banner-container">
      <div className="banner">
        <div className="banner-item">
          <img src="image2.jpg" alt="Image 2" />
          <p>Text 1</p>
        </div>
        <div className="banner-item">
          <img src="image2.jpg" alt="Image 2" />
          <p>Text 2</p>
        </div>
        <div className="banner-item">
          <img src="image3.jpg" alt="Image 3" />
          <p>Text 3</p>
        </div>
        <div className="banner-item">
          <img src="image4.jpg" alt="Image 4" />
          <p>Text 4</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Banner;
