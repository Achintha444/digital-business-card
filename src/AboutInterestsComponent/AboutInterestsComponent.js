import React from 'react';
import './AboutInterestsComponent.css'

export default function AboutInterestsComponent() {
    return (
        <div className='aboutInterest'>
            <div id='about' className='sub-section'>
                <div id='about-title' className='title'>About</div>
                <div id='about-body' className='body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </div>

            <div id='interest' className='sub-section'>
                <div id='interest-title' className='title'>Interest</div>
                <div id='interest-body' className='body'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>
        </div>
    )
}
