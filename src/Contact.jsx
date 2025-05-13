import React from 'react'

const Contact = () => {
    return (
        <div>

            <div id="contact" className="container text-center">
                <h2 className='mb-5 '><span className='fw-lighter '>Get</span><span className='fw-bolder '> In Touch</span></h2>
                <div className="row text-start">
                    <div className="col-md-6 mt-3">
                        <h3 className="fw-lighter mb-4">Get In Touch</h3>
                        <form>
                            <div class="mb-3">
                                <input type="text" class="my-form-control w-100 p-3" id="name" placeholder='Your Name'/>
                            </div>
                            <div class="mb-3">
                                <input type="email" class="my-form-control w-100 p-3" id="email" placeholder='Your Email'/>
                            </div>
                            <div class="mb-3">
                                <input type="phone" class="my-form-control w-100 p-3" id="phone" placeholder='Your Phone'/>
                            </div>
                            <div class="mb-3">
                                <textarea class="my-form-control w-100 p-3" id="exampleFormControlTextarea1" rows="5" placeholder='Write a Message'></textarea>
                            </div>
                            <button type="submit" class="btn btn-success p-2 rounded-pill">Send Message</button>
                        </form>
                    </div>
                    <div className="col-md-6 px-4 mt-3">
                    <h3 className="fw-lighter mb-4 ">My Contact Detail</h3>
                    <div className="contact-info my-txt">

                            <h6 className='text-primary'>EMAIL</h6>
                            <p>bhutta.furqan9@gmail.com</p>
                            <h6 className='text-primary'>PHONE</h6>
                            <p>+923098291732</p>
                            <h6 className='text-primary'>FAX</h6>
                            <p>+923098291732</p>
                            <h6 className='text-primary'>ADDRESS</h6>
                            <p>Ahmad Colony <br/> Sewra Chowk <br/> Multan, Pakistan</p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
