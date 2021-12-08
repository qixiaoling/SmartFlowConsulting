import React from 'react';
import './Footer.css'
import {Link, useHistory} from "react-router-dom";
import {Button} from "./Button";

function Footer() {
    const history = useHistory();
    function handleOnClick (){
        history.push('/contact')
    }
    return(
        <div className='footer-container'>
            <Link to='/' className='footer-logo-container'>
                SmartFlow<i className="fab fa-battle-net"></i>
            </Link>
            <br/>
            <br/>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to='/about-me'>About Me</Link>
                        <Link to='/project'>Project</Link>

                    </div>
                    <div className='footer-link-items'>
                        <Link to='/review'>Review</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
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


            </div>

        </div>
    )
}
export default Footer;