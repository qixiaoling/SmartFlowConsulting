import React, {useState} from 'react';
import {servicesData} from "../../Assets/Services";
import './Services.css'

function Services() {
    const [services, setServices] = useState(servicesData)


    return (
        <section className='services-container'>
            {services.map((item) => {
                const {icon, role, text} = item;
                return (
                    <article className="service-item">
                        <i className={icon}></i>
                        <p>{role}</p>
                        <p>{text}</p>
                    </article>
                )
            })}
        </section>

    )
}

export default Services;