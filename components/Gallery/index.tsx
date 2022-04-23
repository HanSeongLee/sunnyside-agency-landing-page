import React from 'react';
import styles from './styles.module.scss';

const Gallery: React.FC = () => {
    return (
        <div className={styles.gallery}>
            <img src={'/img/mobile/image-gallery-milkbottles.jpg'}
                 alt={''}
            />
            <img src={'/img/mobile/image-gallery-orange.jpg'}
                 alt={''}
            />
            <img src={'/img/mobile/image-gallery-cone.jpg'}
                 alt={''}
            />
            <img src={'/img/mobile/image-gallery-sugar-cubes.jpg'}
                 alt={''}
            />
        </div>
    );
};

export default Gallery;
