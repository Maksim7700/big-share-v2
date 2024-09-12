import React, { useMemo } from 'react';
import './feedback.scss';

const starSrc = './feedback/rating_star_green.svg';

const Feedback = ({ img, title, rate }) => {
    // Memoize the star rating component as it is static
    const stars = useMemo(() => {
        return Array(5).fill().map((_, index) => (
            <img key={index} src={starSrc} alt={`star ${index + 1}`} loading="lazy" />
        ));
    }, []);

    return (
        <div className="feedback">
            <img src={img} loading="lazy" alt={title} />
            <div>
                <div>{title}</div>
                <div className="feedback-rating">
                    <div className="stars">
                        {stars}
                    </div>
                    <div>{rate}</div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
