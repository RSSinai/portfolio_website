import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='contactWrapper'>
        <div className='contact-container'>
        <div>
<h3>contact</h3>
        <p>Don't be shy! Hit me up! 👇</p>
</div>
        <div className='socialContact'>
            <div className='socialLocation'>
            <div className='socialCircle'><FaLocationDot color='rgb(20, 126, 251)'/></div>
            <h3>Location</h3>
            <a>Tel Aviv, Israel</a>
            </div>
            <div className='socialMail'>
            <div className='socialCircle'><IoMdMail color='rgb(20, 126, 251)'/></div>
            <h3>Mail</h3>
            <a>test@test.com</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ContactUs