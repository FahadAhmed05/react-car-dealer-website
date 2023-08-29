import React from "react";
import "./about.css";
import Header from "../components/header/header";
import Testimonial from "../components/testimonials/testimonial";
import Footer from "../components/footer/footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <div className="main-content">
          <h1 className="main-title">About Us</h1>
          <p className="main-description">
            Welcome to <b> ITEHAD MOTORS! </b> <br/> With a passion for excellence, we
            have been serving our customers since Year of Establishment.
          </p>
        </div>
      </main>

      <div className="about-us-container">
        <div className="section">
          <h2>Our Story</h2>
          <p>
            Welcome to CarXpress! With a passion for automobiles and a
            commitment to excellence, we've been serving car enthusiasts since
            2005. Our journey began with a simple goal: to provide the best
            selection of high-quality vehicles and exceptional customer service.
          </p>
        </div>
        <div className="section">
          <h2>Our Team</h2>
          <p>
            Meet the dedicated professionals behind CarXpress. Our team is
            composed of experienced individuals who share a common love for
            cars. From our sales experts to our mechanics, every member of our
            team plays a vital role in ensuring your car-buying experience is
            seamless and enjoyable.
          </p>
        </div>
        <div className="section">
          <h2>Why Choose Us?</h2>
          <p>
            At CarXpress, we're more than just a car dealership. We're a
            community of car enthusiasts dedicated to helping you find your
            dream vehicle. Our commitment to transparency, quality, and customer
            satisfaction sets us apart. With a wide range of brands and models
            to choose from, you're sure to find the perfect car for your needs.
          </p>
        </div>
        <div>
          <Testimonial />
        </div>
        <div className="section">
          <h2>Visit Us</h2>
          <p>
            Experience the world of cars at CarXpress. Visit our showroom and
            explore our collection of vehicles. Our friendly team is ready to
            assist you in finding the car that matches your style and
            preferences.
          </p>
          <p className="address">123 Car Street, Cityville</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
