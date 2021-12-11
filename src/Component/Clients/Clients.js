import React from 'react';
import sns from '../../Assets/Logos/SNS.png'
import ing from '../../Assets/Logos/ING_BANK.png'
import abn from '../../Assets/Logos/ABN_AMRO.png'
import volks from '../../Assets/Logos/De_Volksbank_logo.png'
import pggm from '../../Assets/Logos/PGGM.png'

import './Clients.css';
function Clients() {
    return(
        <section className='clients-container'>
            <div className='clients-content'>
                <div className='clients-title'>
                    <div className='clients-text'>
                        <h4>Clients we work with</h4>
                        <p>
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <button type='button' className='clients-btn'>Learn more</button>
                </div>

                <div className='clients'>
                    <img  className='logo-img' src={sns} alt=''/>
                    <img  className='logo-img' src={ing} alt=''/>
                    <img  className='logo-img' src={abn} alt=''/>
                    <img  className='logo-img' src={volks} alt=''/>
                    <img  className='logo-img' src={pggm} alt=''/>
                </div>


            </div>
        </section>
    )
}
export default Clients;