import React from 'react'
import illus1 from '../images/illus1.svg'
const Hero = () => {
  return (
    <div className='flex'>
      <div className='px-3 pt-3 mt-[80px] space-y-7 mx-5'>
        <p className='text-3xl font-bold '>All your Files in one<br />
          Secure Location, accessible anywhere.</p>
        <p>Flyo Stores all kinds of bario in  sacks and analyses<br />
          the dangers in agreements of fresh flyo products</p>
        <form>
          <input placeholder='ferdinardray@gmail.com' className='py-3 px-3 rounded-sm' />
          <button className='bg-blue-700 px-5 py-3 ml-3'>Get Started</button>
          <p className='text-red-400 ml-3'>Input ongoing</p>
        </form>
      </div>
      <div>
        <img src={illus1} className='w-[390px]' />
      </div>
    </div>
  )
}

export default Hero