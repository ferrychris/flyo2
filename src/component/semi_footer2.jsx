import React from 'react'

const Contact = () => {
  return (
    <div className='bg-white text-black flex'>
        <div className='mx-5 my-5 px-5 py-4 space-y-4'>
            <p className='text-3xl font-bold'>Get Early Access Today</p>
            <p>Its better Early than Never Avoid Late bits <br/>
            understaND the Need for getting all the needful done and <br />
            getting all acertained.</p>
        </div>
        <div className='mt-20 ml-3'>
            <form>
                <input type="text" placeholder='Email address' className='px-7 py-3 border' />
                <button className='px-5 py-3 ml-2 text-white bg-blue-700'>Contact Us</button>
            </form>
        </div>
    </div>
  )
}

export default Contact      