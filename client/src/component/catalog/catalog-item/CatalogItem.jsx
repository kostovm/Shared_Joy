import React from 'react';

export default function CatalogItem({
  city,
  imageUrl,
  productName,
  condition
}) {
  // Generate an array with stars based on the condition
  const stars = Array.from({ length: condition }, (_, index) => (
    <span key={index} className="star">&#9733;</span>
  ));

  return (
    <div className="product">
      <p className="city">{city}</p>
      <div className="product-details">
        <img
          src={imageUrl}
          alt="Product"
          className="product-image"
        />
        <p className="product-text">{productName}</p>
        <div className="star-container">
          {stars}
        </div>
      </div>
    </div>
  );
}
