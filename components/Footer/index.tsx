import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import Logo from '/public/logo.svg';
import SiteMenuContainer from '../../containers/SiteMenuContainer';
import SocialContainer from '../../containers/SocialContainer';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <Logo className={styles.logo} />

                <SiteMenuContainer className={styles.siteMenuContainer} />

                <SocialContainer className={styles.socialContainer} />
            </Container>
        </footer>
    );
};

export default Footer;
