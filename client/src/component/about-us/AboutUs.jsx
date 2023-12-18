import React, { useState } from 'react';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleButtonClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.leftContainer}>
        <h1>Информация за Shared Joy</h1>
        <a href="#" className={styles.infoButtons} onClick={() => handleButtonClick('content1')}>
          Кои сме ние
        </a>
        <a href="#" className={styles.infoButtons} onClick={() => handleButtonClick('content2')}>
          За какво се борим
        </a>
        <a href="#" className={styles.infoButtons} onClick={() => handleButtonClick('content3')}>
          Как мога да помогна
        </a>
      </div>

      <div className={styles.rightContainer}>
        {selectedContent && (
          <div className={styles.rightContent}>
            {selectedContent === 'content1' && (
              <>
                <h1>Кои сме ние</h1>
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quos ipsum hic reiciendis, quaerat natus architecto inventore molestias distinctio accusantium officiis, saepe optio! Sunt quisquam minima reiciendis eveniet quos dolorum.</h3>
              </>
            )}
            {selectedContent === 'content2' && (
              <>
                <h1>За какво се борим</h1>
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur expedita, alias laudantium possimus, tenetur sed, veritatis debitis totam quia est eius obcaecati accusamus nostrum. Veritatis asperiores voluptate repellat magni nulla.</h3>
              </>
            )}
            {selectedContent === 'content3' && (
              <>
                <h1>Как може да помогнете</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus explicabo modi expedita adipisci optio, laboriosam incidunt impedit vero! Maiores corporis facilis dignissimos optio nisi, magnam quis molestiae facere praesentium aliquam?</h3>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}