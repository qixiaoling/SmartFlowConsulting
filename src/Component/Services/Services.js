import React, {useState} from 'react';
import {servicesData} from "../../Assets/Services";
import './Services.css'

function Services() {
    const [services, setServices] = useState(servicesData)


    return (
        <section className='services-container'>
            {services.map((item) => {
                const {icon, role, desc} = item;
                return (
                    <article className="service-item">
                        <i className={icon}></i>
                        <p className='role'>{role}</p>
                        <p className='role-desc'>{desc}</p>
                    </article>
                )
            })}
        </section>

    )
}

export default Services;