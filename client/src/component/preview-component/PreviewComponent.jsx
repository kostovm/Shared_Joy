import { useEffect } from 'react';
import styles from './PreviewComponent.module.css';

export default function PreviewComponent({ values }) {
    useEffect(() => {
        
    }, [values]);

    const stars = Array.from({ length: values.condition }, (_, index) => (
        <span key={index} className={styles.star}>&#9733;</span>
    ));

    return (
        <div className={styles.customComponent}>
            <div className={styles.firstPart}>
                <div className={styles.imagePart}>
                    <img
                        src={values.imageUrl}
                        alt="Product Image"
                        className={styles.productImage}
                    />
                </div>
                <div className={styles.textFields}>
                    <p className={styles.biggerText}>{values.productName}</p>
                    <p className={styles.smallerText}>{values.city}</p>
                </div>
                <div className={styles.starPart}>
                    <h5>Състояние</h5>
                    {stars}
                </div>
            </div>

            <div className={styles.thirdPart}>
                <p>Количество: {values.quantity}</p>
                <p>Описание на продукта: {values.description}</p>
            </div>
        </div>
    );
}