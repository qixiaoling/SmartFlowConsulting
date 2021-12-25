import React from 'react';
import './Banner.css';
import {Link as LinkR} from 'react-router-dom';

function Banner() {
    return(
        <section className='banner-section'>
            <div className='banner-title'>
                <h3>How can we help you?</h3>
                <p><LinkR>Get in touch</LinkR> with us</p>
            </div>
        </section>
    )
}
export default Banner