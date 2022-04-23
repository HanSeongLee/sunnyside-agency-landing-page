import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import TestimonialContainer from '../../containers/TestimonialContainer';

const TestimonialSection: React.FC = () => {
    return (
        <section className={styles.testimonialSection}>
            <Container>
                <h2 className={styles.title}>
                    CLIENT TESTIMONIALS
                </h2>
                <TestimonialContainer className={styles.testimonialContainer} />
            </Container>
        </section>
    );
};

export default TestimonialSection;
