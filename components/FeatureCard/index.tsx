import React, {CSSProperties, HTMLAttributes} from 'react';
import styles from './style.module.scss';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    href: string;
    color: string;
};

const FeatureCard: React.FC<IProps> = ({ title, description, href, color }) => {
    return (
        <div className={styles.featureCard}>
            <h2 className={styles.title}>
                {title}
            </h2>
            <p className={styles.description}>
                {description}
            </p>
            <a className={styles.link}
               href={href}
               style={{
                   '--color': color,
               } as CSSProperties}
            >
                <span>
                    Learn More
                </span>
            </a>
        </div>
    );
};

export default FeatureCard;
