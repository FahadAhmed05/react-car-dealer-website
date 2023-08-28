import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './testimonial.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      heading: "Amazing Product!",
      para: "I've been using this product for a while now and I'm extremely satisfied. It has exceeded all my expectations.",
      description: "The product's quality and performance have greatly impressed me. It's rare to find something that delivers so well.",
      name: "Jane Doe",
      rating: 5,
      image: "jane-doe.jpg",
    },
    {
      heading: "Highly Recommended!",
      para: "I can't believe how much this product has improved my daily routine. It's a game changer!",
      description: "I've tried many similar products, but this one stands out due to its incredible effectiveness and ease of use.",
      name: "John Smith",
      rating: 4.5,
      image: "john-smith.jpg",
    },
    {
      heading: "Unmatched Quality",
      para: "From the moment I started using this product, I knew I had made the right choice. It's unmatched in quality.",
      description: "I'm blown away by the attention to detail and craftsmanship that went into making this product. It's a class apart.",
      name: "Emily Johnson",
      rating: 5,
      image: "emily-johnson.jpg",
    },
  ];

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">Customer Testimonials</h2>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        transitionTime={500}
        interval={3000}
        autoPlay={true}
      >
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <h3 className="testimonial-heading">{testimonial.heading}</h3>
            <p className="testimonial-para">{testimonial.para}</p>
            <p className="testimonial-description">{testimonial.description}</p>
            <div className="testimonial-author">
              <img src={testimonial.image} alt={testimonial.name} className="author-image" />
              <div className="author-info">
                <p className="author-name">{testimonial.name}</p>
                <div className="rating">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <span key={i} className="star">&#9733;</span>
                    
                  ))}
                  
                </div>
                
              </div>
              <button className="view-all-btn">View All Testimonials</button>
            </div>
          </div>
        ))}
      </Carousel>
   
    </div>
  );
};

export default Testimonials;
