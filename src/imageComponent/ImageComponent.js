import React from 'react';
import './ImageComponent.css';
import profileImage from '../images/profile1.jpg';

export default function ImageComponent() {
    return (
        <div className='image'>
            <img src={profileImage} alt="profile" />
        </div>
    )
}
