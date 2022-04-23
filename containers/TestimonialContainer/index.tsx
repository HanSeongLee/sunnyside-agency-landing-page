import React, {HTMLAttributes} from 'react';
import TestimonialCard from '../../components/TestimonialCard';

const testimonials = [
    {
        avatar: '/img/image-emily.jpg',
        description: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
        name: 'Emily R.',
        affiliation: 'Marketing Director',
    },
    {
        avatar: '/img/image-thomas.jpg',
        description: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
        name: 'Thomas S.',
        affiliation: 'Chief Operating Officer',
    },
    {
        avatar: '/img/image-jennie.jpg',
        description: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
        name: 'Jennie F.',
        affiliation: 'Business Owner',
    },
];

const TestimonialContainer: React.FC<HTMLAttributes<HTMLUListElement>> = (props) => {
    return (
        <ul {...props}>
            {testimonials?.map((props, index) => (
                <TestimonialCard {...props}
                                 key={index}
                />
            ))}
        </ul>
    );
};

export default TestimonialContainer;
