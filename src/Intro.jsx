import React from 'react'

const Intro = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      };
    return (
        <div>

            <div id='home' className='container-fluid '>

                <nav className="navbar navbar-expand-lg my-nav">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 my-nav-ul">
                                <li className="nav-item m-3 py-2" onClick={() => scrollToSection("home")}>HOME</li>
                                <li className="nav-item m-3 py-2" onClick={() => scrollToSection("portfolio")}>PORTFOILIO</li>
                                <li className="nav-item m-3 py-2" onClick={() => scrollToSection("resume")}>RESUME</li>
                                <li className="nav-item m-3 py-2" onClick={() => scrollToSection("about")}>ABOUT</li>
                                <li className="nav-item m-3 py-2" onClick={() => scrollToSection("about")}>CONTACT</li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className='contianer  text-white d-flex justify-content-center align-items-center flex-column text-center my-container'>
                    <h1 className='main-heading'><span className='fw-lighter '>Hello, I'm </span>  <br /> <span className='fw-bolder '> Muhammad Furqan</span></h1>
                    <strong className='text-white-50'>AND THIS IS MY RESUME</strong>
                </div>
            </div>

        </div>
    )
}

export default Intro
