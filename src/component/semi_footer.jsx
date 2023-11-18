import React from 'react'
import bgcurvedesk from '../images/bgcurvedesk.svg'
import bgcurvemob from '../images/bgcurvemob.svg'
import illus2 from '../images/illustration-2.svg'




export const Section2 = () => {
  return (
<>
 <div>
        <img src={bgcurvedesk} alt="" className='hidden md:w-full mt-[50px]'/>
        {/* <img src={bgcurvemob} alt="" /> */}
      </div>
    <div className='flex space-x-10 mt-12'>

     
      <div className='mt-[90px] mx-5 space-y-4'>
        <p className='font-bold text-3xl'>Stay Productive in all Seasons</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
          Beatae, aspernatur ipsum? Nostrum quos debitis quas nihil <br />
          mollitia quia libero maxime deleniti, adipisci, <br />
          quisquam harum illo placeat nisi dicta accusantium sunt. <br />
        </p>
        <a href="#" className='text-green-300 text-decoration-line'>Click here to see more</a>

        <div>
          Quotes
          <img src="https://s3-alpha.figma.com/hub/file/3380000135/c8e2a9f9-e9b0-44a3-9db4-08d53434a30c-cover.png"
          className='w-[550px]' alt="" />
        </div>
      </div>
    <div>
      <img src={illus2} alt="illus" className='w-[720px]'/>
    </div>

    </div>
    </>
  )
}
