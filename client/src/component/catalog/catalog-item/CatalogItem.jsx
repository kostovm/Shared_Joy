import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../contexts/authContext';
import * as requestService from '../../../services/requestService';
import { Link } from 'react-router-dom';
import styles from './CatalogItem.module.css';

export default function CatalogItem({
  _id,
  _ownerId,
  city,
  imageUrl,
  productName,
  condition,
  stateChanges
}) {
  const { userId } = useContext(AuthContext);
  const [requestedBy, setRequestedBy] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = await requestService.getRequests(_id);
        setRequestedBy(requests);
      } catch (error) {
        console.error('Error fetching requests:', error);
        setError('Error fetching requests. Please try again later.');
      }
    };

    fetchData();
  }, [stateChanges]);

  const requestCount = requestedBy.length;
  const requestedByUser = Object.values(requestedBy).some(
    (requester) => requester.requesterId === userId
  );

  const stars = Array.from({ length: condition }, (_, index) => (
    <span key={index} className={styles.star}>&#9733;</span>
  ));

  if (error) {
    return <div className={styles.product}>{error}</div>;
  }

  return (
    <div className={styles.product}>
      <p className={styles.city}>{city}</p>
      <div className={styles.productDetails}>
        {requestCount > 0 && _ownerId === userId && (
          <div className={styles.requestBadge}>{requestCount}</div>
        )}
        <Link to={`/products/${_id}`} className={styles.productLink}>
          <img src={imageUrl} alt="Product" className={styles.productImage} />
        </Link>
        <p className={styles.productText}>{productName}</p>
        <div className={styles.starContainer}>{stars}</div>
        {requestedByUser && <div className={styles.requestLabel}>Requested</div>}
      </div>
    </div>
  );
}