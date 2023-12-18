import React, { useEffect, useState } from 'react';
import styles from './FadeInImage.module.css';

export default function FadeInImage ({ imageUrl, altText }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [imageUrl]);

  return (
    <div className={`${styles.imageContainer} ${imageLoaded ? styles.fadeIn : ''}`}>
      <img
        className={styles.image}
        src={imageLoaded ? imageUrl : ''}
        alt={altText}
      />
    </div>
  );
};