import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

const Logo: React.FC = () => {
    return (
        <Link href={'/'}>
            <a className={styles.link}>
                <h1 className={styles.heading}>
                    <img src={'/logo.svg'}
                         alt={'sunnyside'}
                    />
                </h1>
            </a>
        </Link>
    );
};

export default Logo;
