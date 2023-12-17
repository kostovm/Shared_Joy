import React, { useEffect } from 'react';
import styles from './UserInfoModal.module.css';

export default function UserInfoModal({ onClick, requesterInfo }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClick();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick]);

  return (
    <div className={styles.userModal}>
      <img src={requesterInfo.imageUrl} alt="User" className={styles.userImage} />
      <div className={styles.userDetails}>
        <p>
          <strong>Username:</strong> {requesterInfo.username}
        </p>
        <p>
          <strong>Email:</strong> {requesterInfo.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {requesterInfo.phoneNumber}
        </p>
      </div>
      <button className={styles.cancelButton} onClick={onClick}>
        Cancel
      </button>
    </div>
  );
};