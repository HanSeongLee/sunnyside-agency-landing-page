import React from 'react';
import styles from './styles.module.scss';
import Picture from '../Picture';

const Gallery: React.FC = () => {
    return (
        <div className={styles.gallery}>
            <Picture mobile={'/img/mobile/image-gallery-milkbottles.jpg'}
                     desktop={'/img/desktop/image-gallery-milkbottles.jpg'}
            />
            <Picture mobile={'/img/mobile/image-gallery-orange.jpg'}
                     desktop={'/img/desktop/image-gallery-orange.jpg'}
            />
            <Picture mobile={'/img/mobile/image-gallery-cone.jpg'}
                     desktop={'/img/desktop/image-gallery-cone.jpg'}
            />
            <Picture mobile={'/img/mobile/image-gallery-sugar-cubes.jpg'}
                     desktop={'/img/desktop/image-gallery-sugarcubes.jpg'}
            />
        </div>
    );
};

export default Gallery;
