import React from 'react'

import './Card.css'

function Card({ title, imageUrl, body }) {

    return (<div className='card-container'>
        <div className='image-container'>
            <img src={imageUrl} alt="" />
        </div>
        <div className='card-content'>
            <div className='card-title'>
                <h5>{title}</h5>
            </div>
            <div className='card-body'>
                <p>{body}</p>
            </div>
            <div className='btn'>
                <a className='footie'>
                    Cricket
                </a>
            </div>
        </div>
    </div>)

}

export default Card;