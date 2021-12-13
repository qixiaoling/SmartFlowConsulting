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
                        <h4>Subscribe</h4>
                        <p>Select topics and stay current with our latest insights</p>
                        <form className='footer-form'>
                            <input type='text' placeholder='Email address'/>
                            <button>Submit</button>
                        </form>
                    </div>
                    <div className='footer-right'>
                        <div className='footer-right-row-one'>
                            <LinkR to='/'>Contact us</LinkR>
                            <LinkR to='/'>FAQ</LinkR>
                            <LinkR to='/'>Privacy policy</LinkR>
                            <LinkR to='/'>Cookie policy</LinkR>
                            <LinkR to='/'>Terms of use</LinkR>
                        </div>
                        <div className='footer-right-row-two'>
                            <LinkR to='/'>Contact us</LinkR>
                            <LinkR to='/'>FAQ</LinkR>
                            <LinkR to='/'>Privacy policy</LinkR>
                            <LinkR to='/'>Cookie policy</LinkR>
                            <LinkR to='/'>Terms of use</LinkR>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;