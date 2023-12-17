import React from 'react';
import styles from './HomePage.module.css';

export default function HomePage() {
    return (
        <div className={styles.mainContent}>
            <div className={styles.leftContainer}>
                <div className={styles.leftComponent}>
                    <p>
                        Here the things you don't need continue their mission of bringing{" "}
                        <span className={styles.highlightedText}>joy</span>
                    </p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.searchButton}>Search</button>
                        <button className={styles.shareButton}>Share</button>
                    </div>
                </div>

            </div>

            <div className={styles.rightContainer}>
                <div className={styles.rightComponent}>
                    <img src="/images/babyThings.jpg" alt="Description" className={styles.rightImage} />
                </div>
            </div>
        </div>
    )
}