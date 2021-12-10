import React, {useState} from 'react';
import {Link as LinkR, Link as LinkS} from 'react-router-dom';
import './Navbar.css'
import logo from './Assets/logo-lunapic.png'

function Navbar() {

    const [links, toggleLinks] = useState(false);

    function changeClasses() {
        let classes = "navLinks";
        if (links) {
            classes += ' active'
        }
        return classes;
    }
    function closeMobileMenu(){
        toggleLinks(false);
    }

    return (
        <nav className='navbar-container'>
            <div className='navbar-narrow'>
                <p>Let us give you a consult today, call (123)456-7890</p>
            </div>
            <div className='navbar-main'>
                <div className='navbar-header'>
                    <LinkR to='/' className='company-logo'>
                        <img src={logo} alt=""/>
                    </LinkR>
                    <div className='hamburger-menu' onClick={() =>
                        toggleLinks(!links)}>
                        <i className='fas fa-bars'/>
                    </div>
                </div>

                <ul className={changeClasses()}>
                        <li className='link'>
                            <LinkS to='/' onClick={closeMobileMenu} className='router-menu' >Home</LinkS>
                        </li>
                        <li className='link'>
                            <LinkS to='expertise' onClick={closeMobileMenu} className='router-menu'>Expertise</LinkS>
                        </li>
                        <li className='link'>
                            <LinkS to='about-me' onClick={closeMobileMenu} className='router-menu'>About</LinkS>
                        </li>
                        <li className='link'>
                            <LinkS to='review' onClick={closeMobileMenu} className='router-menu'>Review</LinkS>
                        </li>
                        <li className='link'>
                            <LinkS to='clients' onClick={closeMobileMenu} className='router-menu'>Clients</LinkS>
                        </li>
                        <li className='link'>
                            <LinkR to='/contact' onClick={closeMobileMenu} className='router-menu'>Contact</LinkR>
                        </li>
                </ul>

            </div>

        </nav>
    )
}

export default Navbar