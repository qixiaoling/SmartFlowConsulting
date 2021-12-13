import React, {useState} from "react";
import {Link as LinkR} from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Contact.css'

function Contact() {
    const [state, setState] = useState({
        firstName: '',
        lastName:'',
        organisation: '',
        user_email: '',
        comments: '',
    })

    function handleChange(e){
        const value = e.target.value;
        setState({
            ...state, [e.target.name]:value
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
                            <fieldset>
                                <legend>Information</legend>
                                <div className='fieldset-above'>
                                    <div className='contact-col-left'>
                                        <h4>Contact information</h4>
                                        <div className='contact-details'>
                                            <i className="fas fa-phone-square-alt"></i>
                                            <p className='contact-detail-info'>0031 (0) 6 1234 5678</p>
                                        </div>
                                        <div className='contact-details'>
                                            <i className="far fa-envelope"></i>
                                            <p className='contact-detail-info'>ericvandoorn @ smartflow .nl</p>
                                        </div>
                                        <div className='contact-details'>
                                            <i className="fas fa-map-marker-alt"></i>
                                            <p className='contact-detail-info'>SmartFlow 100, Amersfoort, NL</p>
                                        </div>
                                    </div>
                                    <div className='contact-col-right'>
                                        <div className='contact-element'>
                                            <div className='form-group'>
                                                <label htmlFor="firstName">
                                                    First Name :
                                                    <input
                                                        type='text'
                                                        name='firstName'
                                                        value={state.firstName}
                                                        onChange={handleChange}
                                                        id='firstName'
                                                        placeholder='First Name * '

                                                    />
                                                </label>
                                            </div>
                                            <div className='form-group' style={{marginLeft: '10px'}}>
                                                <label htmlFor="lastName">
                                                    Last Name :
                                                    <input
                                                        type='text'
                                                        id='lastName'
                                                        value={state.lastName}
                                                        onChange={handleChange}
                                                        placeholder='Last Name * '
                                                        name='lastName'
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <div className='contact-element-other'>
                                            <label htmlFor="organisation">
                                                Organisation :
                                                <input
                                                    type='text'
                                                    id='organisation'
                                                    value={state.organisation}
                                                    onChange={handleChange}
                                                    placeholder='Organisation *'
                                                    name='organisation'
                                                />
                                            </label>
                                        </div>
                                        <div className='contact-element-other'>
                                            <label htmlFor="user_email">
                                                Email :
                                                <input
                                                    type='user_email'
                                                    id='user_email'
                                                    value={state.user_email}
                                                    onChange={handleChange}
                                                    placeholder='Email *'
                                                    name='user_email'
                                                />
                                            </label>
                                        </div>
                                        <div className='contact-element-other'>
                                            <label htmlFor="comments">
                                                Message :
                                                <textarea
                                                    id='comments'
                                                    value={state.comments}
                                                    onChange={handleChange}
                                                    rows='4'
                                                    col='30'
                                                    placeholder='What can we help you with *'
                                                    name='comments'
                                                >
                        </textarea>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='fieldset-bottom'>
                                    <input type='submit' value='send' className='contact-submit' />

                                </div>


                            </fieldset>

                        </form>
                    </div>
                    <div className='contact-body-right'>
                        <div>
                            <p className='text-bold'>MEDIA INQUIRIES</p>
                            <p className='text-small'>Visit our <LinkR>media center</LinkR> to find contact details for our media relations team in your region.</p>
                        </div>
                        <div>
                            <p className='text-bold'>REPRINTS</p>
                            <p className='text-small'>To request permission to republish an article, or if you have any questions about the usage of content
                                published by McKinsey & Company visit our <LinkR>FAQ</LinkR> page.</p>
                        </div>
                    </div>

                </div>

            </div>


        </section>
    )
}


export default Contact