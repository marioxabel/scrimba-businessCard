import React from 'react'
import laura from '../assets/laura.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Info() {
    return(
        <div className='info'>
            <img src={laura} alt='photo of laura'/>
            <h2>Laura Smith</h2>
            <p>Frontend Developer</p>
            <p>laurasmith.website</p>
            <div className='info--buttons'>
                <div className='info--buttons_email'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h4>Email</h4>
                </div>
                <div className='info--buttons_linkedIn'>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <h4>LinkedIn</h4>
                </div>
            </div>
        </div>
    )
}