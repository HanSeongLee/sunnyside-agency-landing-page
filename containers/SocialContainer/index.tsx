import React, {HTMLAttributes} from 'react';
import FacebookIcon from '/public/icons/icon-facebook.svg';
import InstagramIcon from '/public/icons/icon-instagram.svg';
import TwitterIcon from '/public/icons/icon-twitter.svg';
import PinterestIcon from '/public/icons/icon-pinterest.svg';

const socials = [
    {
        name: 'facebook',
        icon: <FacebookIcon />,
        href: '#'
    },
    {
        name: 'instagram',
        icon: <InstagramIcon />,
        href: '#'
    },
    {
        name: 'twitter',
        icon: <TwitterIcon />,
        href: '#'
    },
    {
        name: 'pinterest',
        icon: <PinterestIcon />,
        href: '#'
    },
];

const SocialContainer: React.FC<HTMLAttributes<HTMLUListElement>> = (props) => {
    return (
        <ul {...props}>
            {socials?.map(({name, icon, href}, index) => (
                <li key={index}>
                    <a href={href}
                       target={'_blank'}
                       aria-label={name}
                    >
                        {icon}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialContainer;
