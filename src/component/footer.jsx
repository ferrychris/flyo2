import React from 'react'
import logo from '../images/logo.svg'
import phone from '../images/phone.svg'
import email from '../images/email.svg'



export const Footer = () => {
    return (
        <div >
            <div className='flex space-x-80 px-5 py-4'>
                <div>
                    <img src={logo} alt="" />
                    <div>
                        <img src={phone} alt="" />
                        <p>Phone: +2348100812043</p>
                    </div>
                    <div>
                        <img src={email} alt="" />
                        <p>Phone: ferrychris95@gmail.com </p>
                    </div>
                </div>
                <div>
                    <li> About Us </li>
                    <li> Jobs </li>
                    <li> PRess </li>
                    <li> Blog </li>

                </div>
                <div>
                    <li> Company </li>
                    <li> Terms && </li>
                    <li> PRess </li>

                </div>
            </div>
        </div>
    )
}
