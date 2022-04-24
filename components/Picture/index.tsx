import React, {HTMLAttributes} from 'react';

interface IProps extends HTMLAttributes<HTMLImageElement> {
    mobile: string;
    desktop: string;
};

const Picture: React.FC<IProps> = ({ mobile, desktop, ...props }) => {
    return (
        <picture>
            <source srcSet={mobile}
                    media={'(max-width: 568px)'}
            />
            <source srcSet={desktop}
                    media={'(min-width: 992px)'}
            />

            <img src={desktop}
                 alt={''}
                 {...props}
            />
        </picture>
    );
};

export default Picture;
