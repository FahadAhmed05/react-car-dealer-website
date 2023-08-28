import React from "react";
import "./sale-item.css";

function SaleItem({ imageSrc, labels, price }) {
  return (
    <div className="container">
    <div className="sale-item">
      <div className="sale-item-image">
        <img src={imageSrc} alt="Product" />
      </div>
      <div className="sale-item-details">
        {labels.map((label, index) => (
          <p key={index}>{label}</p>
        ))}
      </div>
      <div className="sale-item-price">
        <p>{price}</p>
      </div>
    </div>
    </div>
  );
}

export default SaleItem;
