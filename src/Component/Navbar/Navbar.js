import React, {useEffect, useState} from 'react';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR, useHistory} from 'react-router-dom';
import './Navbar.css'
import logo from '../../Assets/logo-lunapic.png'

function Navbar() {

    const [links, toggleLinks] = useState(false);
    const history = useHistory();

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
    useEffect(()=>{
        console.log(history.location.pathname)
    },[])

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
                            <LinkR to='/' onClick={closeMobileMenu} className='router-menu'>Home</LinkR>
                        </li>
                        <li className='link'>
                            {
                                history.location.pathname === '/' ?
                                    (<LinkS to='expertise' smooth={true} duration={500}
                                            onClick={closeMobileMenu} className='router-menu'>Expertise</LinkS>)
                                    :
                                    (<LinkR  to='/' onClick={closeMobileMenu} className='router-menu'>Expertise</LinkR>)
                            }

                        </li>
                        <li className='link'>
                            {
                                history.location.pathname === '/' ?
                                    (<LinkS to='about' smooth={true} duration={500}
                                            onClick={closeMobileMenu} className='router-menu'>About</LinkS>)
                                    :
                                    (<LinkR  to='/' onClick={closeMobileMenu} className='router-menu'>About</LinkR>)
                            }

                        </li>
                        <li className='link'>
                            {
                                history.location.pathname === '/' ?
                                    (<LinkS to='clients' smooth={true} duration={500}
                                            onClick={closeMobileMenu} className='router-menu'>Clients</LinkS>)
                                    :
                                    (<LinkR  to='/' onClick={closeMobileMenu} className='router-menu'>Clients</LinkR>)
                            }
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