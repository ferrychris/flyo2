import React from 'react'
import Navbar from './component/navbar'
import Hero from './component/hero'
import Contact from './component/semi_footer2'
import { Footer } from './component/footer'
import { Section2 } from './component/semi_footer'

export const Home = () => {
  return (
    <div>
         <Navbar/>
         <Hero/>
         <Section2/>
    <Contact/>
    <Footer/>
    </div>
  )
}
