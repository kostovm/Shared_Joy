import React, { useEffect } from 'react';

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
    <div className="user-modal">
      <img src={requesterInfo.imageUrl} alt="User" className="user-image" />
      <div className="user-details">
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
      <button className="cancel-button" onClick={onClick}>
        Cancel
      </button>
    </div>
  );
};