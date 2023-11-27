import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='footerWrapper'>
        <div className='footerText'>Copyright © 2023. All rights are reserved
                <span>
          <a href="https://www.linkedin.com/in/ronysinai/" className="socialIntro">
            <FaLinkedin  size={32} color='white'/> 

          </a>
          <a href="https://github.com/RSSinai" className="socialIntro">
            <FiGithub size={32} color='white'/>
          </a>
        </span></div>
        <div className='footerSocial'>

        </div>
    </div>
  )
}

export default Footer