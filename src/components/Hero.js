import React from 'react';
import img1 from '../images/hero/1.jpg'
import img2 from '../images/hero/2.jpg'
import img3 from '../images/hero/3.jpg'
import img4 from '../images/hero/4.jpg'
import img5 from '../images/hero/5.jpg'
import img6 from '../images/hero/6.jpg'
import img7 from '../images/hero/7.jpg'
import img8 from '../images/hero/8.jpg'
import img9 from '../images/hero/9.jpg'

const Hero = () => (
    <div className="hero">
        <div className="hero--banner">
            <div className='column'>
                <img src={img7}/>
            </div>
            <div className='column'>
                <img src={img9}/>
                <img src={img5}/>
            </div>
            <div className='column'>
                <img src={img6}/>
                <img src={img8}/>
            </div>
            <div className='column'>
                <img src={img1}/>
                <img src={img2}/>
            </div>
            <div className='column'>
                <img src={img4}/>
                <img src={img3}/>
            </div>
        </div>
        <section className='hero--text'>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    </div>
);

export default Hero