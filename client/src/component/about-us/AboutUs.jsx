import React from 'react';
import styles from './AboutUs.module.css';

export default function AboutUs() {
    return (
        <div className={styles.mainContent}>

            <div className={styles.leftContainer}>
                {/* <!-- Your content for the left side --> */}

                <h1>About us</h1>
                <a href="#">Tarator</a>
                <a href="#">Tarator</a>
                <a href="#">Tarator</a>


            </div>

            <div className={styles.rightContainer}>
                {/* <!-- Your content for the right side --> */}

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sapiente doloribus veritatis ipsam laborum officiis autem. Ratione dignissimos, molestiae non minus sit corporis blanditiis nemo, libero, esse eveniet doloremque? Delectus!</p>

            </div>

        </div>
    )
}