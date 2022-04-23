import React, {LiHTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends LiHTMLAttributes<HTMLLIElement> {
    avatar: string;
    description: string;
    name: string;
    affiliation: string;
};

const TestimonialCard: React.FC<IProps> = ({
                                       avatar, description, name, affiliation,
                                       className, ...props
                                   }) => {
    return (
        <li className={cn(styles.testimonialCard, className)}
            {...props}
        >
            <img className={styles.avatar}
                 src={avatar}
                 alt={''}
            />
            <p className={styles.description}>
                {description}
            </p>
            <div>
                <div className={styles.name}>
                    {name}
                </div>
                <div className={styles.affiliation}>
                    {affiliation}
                </div>
            </div>
        </li>
    );
};

export default TestimonialCard;
