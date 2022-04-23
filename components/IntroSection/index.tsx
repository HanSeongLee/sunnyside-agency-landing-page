import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import FeatureCard from '../FeatureCard';
import PhotoCard from '../PhotoCard';

const IntroSection: React.FC = () => {
    return (
        <section className={styles.introSection}>
            <img src={'/img/mobile/image-transform.jpg'}
                 alt={''}
            />

            <Container>
                <FeatureCard title={'Transform your brand'}
                             description={'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'}
                             href={'#'}
                             color={'#FAD400'}
                />
            </Container>

            <img src={'/img/mobile/image-stand-out.jpg'}
                 alt={''}
            />
            <Container>
                <FeatureCard title={'Stand out to the right audience'}
                             description={'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'}
                             href={'#'}
                             color={'#FE7766'}
                />
            </Container>

            <PhotoCard src={'/img/mobile/image-graphic-design.jpg'}
                       title={'Graphic Design'}
                       description={'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'}
                       color={'#24554A'}
            />
            <PhotoCard src={'/img/mobile/image-photography.jpg'}
                       title={'Photography'}
                       description={'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'}
                       color={'#19536C'}
            />

        </section>
    );
};

export default IntroSection;
