import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import FeatureCard from '../FeatureCard';
import PhotoCard from '../PhotoCard';
import cn from 'classnames';
import Picture from '../Picture';

const IntroSection: React.FC = () => {
    return (
        <section className={styles.introSection}>
            <div className={cn(styles.featureContainer, styles.reverse)}>
                <div className={styles.imageWrapper}>
                    <Picture mobile={'/img/mobile/image-transform.jpg'}
                             desktop={'/img/desktop/image-transform.jpg'}
                    />
                </div>

                <Container className={styles.featureCardContainer}>
                    <FeatureCard title={'Transform your brand'}
                                 description={'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'}
                                 href={'#'}
                                 color={'#FAD400'}
                    />
                </Container>
            </div>

            <div className={styles.featureContainer}>
                <div className={styles.imageWrapper}>
                    <Picture mobile={'/img/mobile/image-stand-out.jpg'}
                             desktop={'/img/desktop/image-stand-out.jpg'}
                    />
                </div>

                <Container className={styles.featureCardContainer}>
                    <FeatureCard title={'Stand out to the right audience'}
                                 description={'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'}
                                 href={'#'}
                                 color={'#FE7766'}
                    />
                </Container>
            </div>

            <div className={styles.photoCardContainer}>
                <PhotoCard src={{
                    mobile: '/img/mobile/image-graphic-design.jpg',
                    desktop: '/img/desktop/image-graphic-design.jpg',
                }}
                           title={'Graphic Design'}
                           description={'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'}
                           color={'#24554A'}
                />
                <PhotoCard src={{
                    mobile: '/img/mobile/image-photography.jpg',
                    desktop: '/img/desktop/image-photography.jpg',
                }}
                           title={'Photography'}
                           description={'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'}
                           color={'#19536C'}
                />
            </div>

        </section>
    );
};

export default IntroSection;
