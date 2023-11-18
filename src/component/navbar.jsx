import React from 'react'
// import { useState } from 'react';
import logo from '../images/logo.svg'
import { FaSearchengin } from 'react-icons/fa'
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCancelCircle } from "react-icons/im";


const Navbar = () => {
  return (
    <>

    {/* <div className='flex mt-5 mx-5'>
      <div>
        <img src={logo} alt="" />
      </div>
      <nav className=' ml-[200px]  md:ml-[760px]'>

        <div>
          <RxHamburgerMenu className='text-3xl md:hidden ' />
          <ImCancelCircle className='text-3xl md:hidden />
        </div>
        
        <div className="hidden sm:block md:flex space-x-4">
          <li> Features</li>
          <li>Team</li>
          <li> Sign Up</li>
          <FaSearchengin />
        </div>


      </nav>npm install gh-pages --save-dev
   
    </div> */}
    </>
  )
}

export default Navbar