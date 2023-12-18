import React from 'react';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
     <h1 className={styles.text}>404: Page not found</h1>
      <img src="/images/baby-cry.jpg" alt="404 Image" className={styles.image} />
    </div>
  );
}