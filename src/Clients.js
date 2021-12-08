import React from 'react';
import './Clients.css'
import ing from './Assets/ing.jpg'
import abn from './Assets/abn.png'
import acto from './Assets/Acto.jpg'
import rabo from './Assets/rabo.png'
import bouwfonds from './Assets/bouwfond.jpg'
import pggm from './Assets/pggm.png'
import sns from './Assets/sns.svg'
import postbank from './Assets/postbank.png'
import starter from './Assets/starter.png'
import volksbank from './Assets/volksbank.jpg'
import {Link} from "react-router-dom";

function Clients() {
    return (
        <div className='client-container'>
            <h2>A Few of the Epic Organizations We Work With</h2>
            <div className='logo-container'>
                <div className='sub-logo-container'>
                    <a href='https://www.abnamro.nl/nl/prive/index.html' target='_blank'><img src={abn}/></a>
                    <a href='https://www.ing.nl/particulier/index.html' target='_blank'><img src={ing}/></a>
                    <a href='https://www.acto.nl/' target='_blank'><img src={acto}/></a>
                    <a href='https://www.rabobank.nl/' target='_blank'> <img src={rabo}/></a>
                    <a href='https://stater.nl/nl/' target='_blank'><img src={starter}/></a>
                </div>
                <div className='sub-logo-container'>
                    <a href='http://www.bouwfondsim.com/' target='_blank'><img src={bouwfonds}/></a>
                    <a href='https://www.pggm.nl/' target='_blank'><img src={pggm}/></a>
                    <a href='https://www.snsbank.nl/particulier/home.html' target='_blank'><img src={sns}/></a>
                    <a href='https://www.ing.nl/particulier/index.html' target='_blank'><img src={postbank}/></a>
                    <a href='https://www.devolksbank.nl/' target='_blank'><img src={volksbank}/></a>
                </div>

            </div>

        </div>

    )

}

export default Clients