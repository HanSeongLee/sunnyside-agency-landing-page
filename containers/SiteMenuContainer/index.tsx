import React, {HTMLAttributes} from 'react';
import Link from 'next/link';

const siteMenu = [
    {
        name: 'About',
        href: '#about',
    },
    {
        name: 'Services',
        href: '#services',
    },
    {
        name: 'Projects',
        href: '#projects',
    },
];

const SiteMenuContainer: React.FC<HTMLAttributes<HTMLUListElement>> = (props) => {
    return (
        <ul {...props}>
            {siteMenu?.map(({ name, href }, index) => (
                <li key={index}>
                    <Link href={href}>
                        <a>
                            {name}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SiteMenuContainer;
