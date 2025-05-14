import React from 'react'
import Intro from './Intro'
import './myCSS.css'
import Resume from './Resume'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Footer from './Footer'
import FeaturedPortfolio from './FeaturedPortfolio'

const Home = () => {
  return (
    <div>
      <Intro/>
      <FeaturedPortfolio/>
      <Resume/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
