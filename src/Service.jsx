import React from 'react'

const Service = () => {
  return (
    <div>
      
      <div id="service" className="container text-center">
      <h2 className='mb-5'><span className='fw-lighter '>My</span><span className='fw-bolder '> Services</span></h2>
      <div className="row">
        <div className="col-lg-4 col-md-6 my-2">
            <div className="service-card p-5">
            <div className="ser-icon"><i class="fa-regular fa-window-maximize"></i></div>
            <h4 className='my-4'>Web Design</h4>
            <p className='my-txt'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <button className='mt-3 btn btn-dark'>Learn More</button> 
            </div>
        </div>
        <div className="col-lg-4 col-md-6 my-2">
            <div className="service-card p-5">
            <div className="ser-icon"><i class="fa-solid fa-desktop"></i></div>
            <h4 className='my-4'>Search Engine Optimization</h4>
            <p className='my-txt'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <button className='mt-3 btn btn-dark'>Learn More</button> 
            </div>
        </div>
        <div className="col-lg-4 col-md-6 my-2">
            <div className="service-card p-5">
            <div className="ser-icon"><i class="fa-regular fa-circle-play"></i></div>
            <h4 className='my-4'>Video Editing</h4>
            <p className='my-txt'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            <button className='mt-3 btn btn-dark'>Learn More</button> 
            </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Service
