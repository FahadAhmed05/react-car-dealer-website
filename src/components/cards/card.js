import React from 'react';
import './card.css'; 

const CardComponent = ({ title, description, features, buttonText }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <hr />
      {features.map((feature, index) => (
        <p key={index}>- {feature}</p>
      ))}
      <button>{buttonText}</button>
    </div>
  );
};

export default CardComponent;
