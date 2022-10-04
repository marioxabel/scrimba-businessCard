import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className='footer'>
            <FontAwesomeIcon icon={faSquareTwitter} />
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faSquareInstagram} />
            <FontAwesomeIcon icon={faSquareGithub} />
        </div>
    )
}