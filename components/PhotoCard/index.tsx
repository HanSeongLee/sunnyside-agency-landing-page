import React, {CSSProperties, HTMLAttributes} from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    src: string;
    title: string;
    description: string;
    color: string;
};

const PhotoCard: React.FC<IProps> = ({
                                         src, title, description, color,
                                         className, ...props
                                     }) => {
    return (
        <div className={cn(styles.photoCard, className)}
             style={{
                 color,
             } as CSSProperties}
             {...props}
        >
            <img src={src}
                 alt={''}
            />

            <Container className={styles.container}>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <p className={styles.description}>
                    {description}
                </p>
            </Container>
        </div>
    );
};

export default PhotoCard;
