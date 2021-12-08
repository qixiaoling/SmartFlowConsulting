import React from 'react';
import './Button'
import './HeroSection.css'
import {Button} from "./Button";
import videoDigit from './Assets/video.mp4'
import {useHistory} from "react-router-dom";
import chess from './Assets/chess_1.jpg'


function HeroSection(){

    const history = useHistory();
    function handleOnClick (){
        history.push('/contact')
    }
    return(
        <div className='hero-container'>
            <img src={chess} alt=''/>

            <h1>What's Your Next Move?</h1>
            <br/>
            <Button
                className='btn'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                data-testid='test'
                onClick={()=>handleOnClick()}
            >
                Get Started
            </Button>
        </div>
    )
}
export default HeroSection