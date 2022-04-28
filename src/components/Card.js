import React from 'react';
import star from '../images/star.svg';

const Card = (props) => {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = 'sold out'
    } else if (props.location === 'Online') {
        badgeText = 'online'
    };

    return (
    <div className='card'>
        <img className='card--cover' src={`./images/${props.coverImg}`}/>
        {badgeText != null && <div className='card--availability'>{badgeText}</div>}
        <div className='card--text'>
            <div className='card--text--upper'>
            <span className='card--text--rating'><img src={star} alt='star'/>{props.stats.rating.toFixed(1)} </span>
            ({props.stats.reviewCount}) • {props.location}
            </div>
            <div className='card--text--description'>
                {props.title}
            </div>
            <div className='card--text--pricing'>
                <b>From ${props.price}</b> / person
            </div>
        </div>
    </div>
    );
};

export default Card