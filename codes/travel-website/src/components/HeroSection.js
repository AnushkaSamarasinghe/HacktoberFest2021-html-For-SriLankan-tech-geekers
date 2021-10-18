import React from 'react';
import '../App.css';
import './HeroSection.css';
import {Button} from './Button';
function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='./videos/video-1.mp4' autoPlay loop muted></video>
            <h1>ADVENTURE AWAITS</h1>
            <p>Put on your skates now!</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER 
                <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default HeroSection
