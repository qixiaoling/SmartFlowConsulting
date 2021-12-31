import React, {useState} from "react";
import {Link as LinkR} from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Contact.css'
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";

function Contact() {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        organisation: '',
        user_email: '',
        comments: '',
        subject: ''
    })

    function handleChange(e) {
        const value = e.target.value;
        setState({
            ...state, [e.target.name]: value
        })
    }

    function sendEmail(e) {
        e.preventDefault()
        emailjs.sendForm('service_nutqs4m', 'template_ryaderb', e.target, 'user_NgKIGKzOiher4EUv0KXUu')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <Navbar/>
            <section className='contact-section'>
                <div className='contact-content'>
                    <div className='contact-title-container'>
                        <h2>Contact Us</h2>
                    </div>
                    <div className='contact-body'>
                        <div className='contact-body-left'>
                            <div className='contact-declaration'>
                                <p className='text-larger'>Thank you for your interest in Smart Flow Consulting.
                                    Please fill out the form below to ask a
                                    question or report a technical problem.
                                </p>
                                <p className='text-small'>
                                    Please note: while we appreciate your questions,
                                    we are unable to respond to all inquiries.
                                </p>
                                <p className='text-small'>
                                    Required fields are marked with an asterisk (*).
                                </p>
                            </div>
                            <form onSubmit={sendEmail}>

                                <label htmlFor="firstName">
                                    FIRST NAME *
                                    <br/>
                                    <input
                                        type='text'
                                        name='firstName'
                                        value={state.firstName}
                                        onChange={handleChange}
                                        id='firstName'

                                    />
                                </label>
                                <label htmlFor="lastName">
                                    LAST NAME *
                                    <br/>
                                    <input
                                        type='text'
                                        name='lastName'
                                        value={state.lastName}
                                        onChange={handleChange}
                                        id='lastName'

                                    />
                                </label>


                                <label htmlFor="user_email">
                                    EMAIL *
                                    <br/>
                                    <input
                                        type='user_email'
                                        id='user_email'
                                        value={state.user_email}
                                        onChange={handleChange}
                                        name='user_email'
                                    />
                                </label>


                                <label htmlFor="organisation">
                                    COMPANY OR SCHOOL
                                    <br/>
                                    <input
                                        type='text'
                                        id='organisation'
                                        value={state.organisation}
                                        onChange={handleChange}
                                        name='organisation'
                                    />
                                </label>
                                <label htmlFor="subject">
                                    SUBJECT *
                                    <br/>
                                    <input
                                        type='text'
                                        id='subject'
                                        value={state.subject}
                                        onChange={handleChange}
                                        name='subject'
                                    />
                                </label>


                                <label htmlFor="comments">
                                    MESSAGE *
                                    <br/>
                                    <textarea
                                        id='comments'
                                        value={state.comments}
                                        onChange={handleChange}
                                        rows='4'
                                        col='30'
                                        name='comments'
                                    >
                                                 </textarea>
                                </label>

                                <input type='submit' value='Submit' className='contact-submit'/>

                            </form>
                        </div>
                        <div className='contact-body-right'>
                            <div className='contact-article'>
                                <p className='text-bold'>MEDIA INQUIRIES</p>
                                <p className='text-small'>Visit our <LinkR>media center</LinkR> to find contact details for
                                    our media relations team in your region.</p>
                            </div>
                            <div className='contact-article'>
                                <p className='text-bold'>REPRINTS</p>
                                <p className='text-small'>To request permission to republish an article, or if you have any
                                    questions about the usage of content
                                    published by Smart Flow Consulting visit our <LinkR to="/">FAQ</LinkR> page.</p>
                            </div>
                        </div>

                    </div>

                </div>


            </section>
            <Footer/>
        </>

    )
}


export default Contact