import React from 'react';
import styles from './style.module.scss';

const FeatureCard: React.FC = () => {
    return (
        <div className={styles.featureCard}>
            <h2 className={styles.title}>
                Transform your brand
            </h2>
            <p className={styles.description}>
                We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
            </p>
            <a className={styles.link}>
                Learn More
            </a>
        </div>
    );
};

export default FeatureCard;
