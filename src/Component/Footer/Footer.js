import React from 'react';
import './Footer.css';
import logo from "../../Assets/logo-lunapic.png";
import {Link as LinkR} from "react-router-dom";
function Footer() {
    return(
        <section className='footer-section'>
            <div className='footer-content'>
                <LinkR to='/' className='company-logo'>
                    <img src={logo} alt=""/>
                </LinkR>
                <div className='footer-text'>
                    <div className='footer-left'>
                        <p className='footer-left-title'>Subscribe</p>
                        <p>Select topics and stay current with our latest insights</p>
                        <form className='footer-form'>
                            <input type='text' placeholder='Email address' id='footer-email'/>
                            <button className='footer-submit-btn'>Submit</button>
                        </form>
                    </div>
                    <div className='footer-right'>
                        <div className='footer-right-links'>
                            <div className='footer-right-row-one'>
                                <LinkR className='footer-link' to='/'>Contact us</LinkR>
                                <LinkR className='footer-link' to='/'>FAQ</LinkR>
                                <LinkR className='footer-link' to='/'>Privacy policy</LinkR>
                                <LinkR className='footer-link' to='/'>Cookie policy</LinkR>
                                <LinkR className='footer-link' to='/'>Terms of use</LinkR>
                            </div>
                            <div className='footer-right-row-two'>
                                <LinkR className='footer-link' to='/'>Local language information</LinkR>
                                <LinkR className='footer-link' to='/'>Accessibility statement</LinkR>
                            </div>
                        </div>
                        <div className='footer-icon'>
                            <button className='footer-icon-btn'>
                                <i className="fab fa-linkedin-in"></i>
                            </button>
                            <button className='footer-icon-btn'>
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button className='footer-icon-btn'>
                                <i className="fab fa-facebook-f"></i>
                            </button>
                            <button className='footer-icon-btn'>
                                <i className="fab fa-youtube"></i>
                            </button>
                            <button className='footer-icon-btn'>
                                <i className="fab fa-linkedin-in"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;