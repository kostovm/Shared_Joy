import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../contexts/authContext'
import * as requestService from '../../../services/requestService'
import { Link } from 'react-router-dom';

export default function CatalogItem({
  _id,
  _ownerId,
  city,
  imageUrl,
  productName,
  condition,
  productId
}) {

  const { userId } = useContext(AuthContext);
  const [requestedBy, setRequestedBy] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = await requestService.getRequests(_id);
        setRequestedBy(requests);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchData();
  }, [productId]);

  const requestCount = requestedBy.length;
  const requestedByUser = Object.values(requestedBy).some((requester) => requester.requesterId === userId);

  const stars = Array.from({ length: condition }, (_, index) => (
    <span key={index} className="star">&#9733;</span>
  ));

  return (
      <div className="product">
        <p className="city">{city}</p>
        <div className="product-details">
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