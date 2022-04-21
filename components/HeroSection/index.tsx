import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';

const HeroSection: React.FC = () => {
    return (
        <section className={styles.heroSection}>
            <Container className={styles.container}>
                <h2 className={styles.title}>
                    We are creatives
                </h2>
                <img className={styles.arrowDownIcon}
                     src={'/icons/icon-arrow-down.svg'}
                     alt={''}
                />
            </Container>
        </section>
    );
};

export default HeroSection;
