import React, {useState} from 'react';
import {servicesData} from "../../Assets/Services";


function Services() {
    const [services, setServices] = useState(servicesData)
    return (
        <>
            {services.map((item)=>{
                const {icon, role, text } = item;
                return(
                    <article>{role}</article>
                )
            })}
        </>

    )
}

export default Services;