import React, { useContext } from 'react';
import AuthContext from '../../../contexts/authContext'
import { Link } from 'react-router-dom';

export default function CatalogItem({
  _id,
  _ownerId,
  city,
  imageUrl,
  productName,
  condition,
  requestedBy
}) {
  const stars = Array.from({ length: condition }, (_, index) => (
    <span key={index} className="star">&#9733;</span>
  ));

  const { userId } = useContext(AuthContext);
  const requestCount = requestedBy.length;
  const requestedByUser = requestedBy.some((requester) => requester.requesterId === userId);


  return (
      <div className="product">
        <p className="city">{city}</p>
        <div className="product-details">
          {/* Red circle with a number */}
          {requestCount > 0 && _ownerId === userId && (
            <div className="request-badge">{requestCount}</div>
          )}
                  <Link to={`/products/${_id}`} className="product-link">
          <img
            src={imageUrl}
            alt="Product"
            className="product-image"
          />
                  </Link>
          <p className="product-text">{productName}</p>
          <div className="star-container">
            {stars}
          </div>

          {/* Gray label with text "Requested" */}
          {requestedByUser && (
            <div className="request-label">Requested</div>
          )}
        </div>
      </div>
  );
}