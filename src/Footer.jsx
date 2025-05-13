import React from 'react'

const Footer = () => {
  return (
    <div>

        <div id="footer" className="container text-center">
            <p className='my-txt'>Copyright &copy; 2025 All rights reserved | Made by <span className='text-success'>furqan</span></p>
            <div className="social-links d-flex justify-content-center">
                <div className="social-link p-3 rounded-circle bg-secondary m-2"><i class="fa-brands fa-facebook-f"></i></div>
                <div className="social-link  p-3 rounded-circle bg-secondary m-2 "><i class="fa-brands fa-twitter"></i></div>
                <div className="social-link p-3 rounded-circle bg-secondary m-2 "><i class="fa-brands fa-instagram"></i></div>
                <div className="social-link p-3 rounded-circle bg-secondary m-2 "><i class="fa-brands fa-linkedin"></i></div>
                <div className="social-link p-3 rounded-circle bg-secondary m-2 "><i class="fa-brands fa-vimeo-v"></i></div>
            </div>
        </div>
    </div>
  )
}

export default Footer
