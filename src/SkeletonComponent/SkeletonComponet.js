import React from 'react';
import AboutInterestsComponent from '../AboutInterestsComponent/AboutInterestsComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import Footer from '../Footer/footer';
import ImageComponent from '../ImageComponent/ImageComponent';
import NameComponent from '../nameComponent/NameComponent';
import './SkeletonComponet.css';

export default function SkeletonComponet() {
    return (
        <div className='skeleton'>
            <ImageComponent />
            <NameComponent />
            <ButtonComponent />
            <AboutInterestsComponent />
            <Footer />
        </div>
    )
}
