import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import FadeInImage from '../fade-in-image/FadeInImage';

export default function HomePage() {
    const [buttonsVisible, setButtonsVisible] = useState(false);

    useEffect(() => {
        const buttonsTimeout = setTimeout(() => {
            setButtonsVisible(true);
        }, 1000);

        return () => {
            clearTimeout(buttonsTimeout);
        };
    }, []);

    return (
        <div className={styles.mainContent}>
            <div className={styles.leftContainer}>
                <div className={styles.leftComponent}>
                    <p className={styles.largeText}>
                        Тук нещата, от които вече не се нуждаете, продължават мисията си да носят радост!
                    </p>
                    <div className={styles.buttonContainer} style={{ display: buttonsVisible ? 'block' : 'none' }}>
                        <button className={styles.searchButton}>Потърси</button>
                        <button className={styles.shareButton}>Подари</button>
                    </div>
                </div>
            </div>

            <div className={styles.rightContainer}>
                <div className={styles.rightComponent}>
                <FadeInImage imageUrl={'/images/babyThings.jpg'}/>
                </div>
            </div>
        </div>
    );
}