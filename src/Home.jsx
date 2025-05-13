import React from 'react'
import Intro from './Intro'
import './myCSS.css'
import Portfolio from './portfolio'
import Resume from './Resume'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Intro/>
      <Portfolio/>
      <Resume/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
