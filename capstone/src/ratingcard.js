import React from 'react';

export default function  Ratingcard ({Rating, Src,Review,Name}) {

    return (
        <div className='ratingbox'>
            <div className='leftCol'>
                <h3>
                    {Rating}
                </h3>
                <img src={Src} alt='avatar' />
                <p>{Review}</p>
            </div>
            <div className='rightCol'>
                <h3>{Name}</h3>
            </div>
        </div>
    );

}