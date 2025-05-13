import React from 'react'
import img2 from './Images/img_2.jpg'

const About = () => {
  return (
    <div>
      
      <div id="about" className='container'>
        <div className="row">
            <div className="col-lg-6">
                <img src={img2} alt="my-image" className='img-fluid' />
            </div>
            <div className="col-lg-6 p-5">
            <h2 className='mb-5'><span className='fw-lighter '>About</span><span className='fw-bolder '> Me</span></h2>
            <p className='my-txt'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className='my-txt'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <button className='btn btn-success my-5 mx-3'>Hire Me</button>
            <button className='btn btn-secondary my-5'>Download CV</button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default About
