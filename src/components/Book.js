import React from 'react'
import './Book.css';

const Book = () => {
  return (
    <div class="container-fluid vish">
      <div class="row">

        <div class="col-md-5">
          <div className="contact_feedback__ldaRn coi fadeInLeft" >

            <h1 class="h2">We’d love to hear from you</h1>
            <p>Chat to our friendly team.</p>
            <div class="vosh">
              
              <div className='au'>
                <h3 class="h3">Chat to Sales</h3>
                <p>Speak to our friendly team.</p>
                <div  className='zoi'>
              <i class="bi  bi-envelope-at-fill"></i>
              <a href="mailto:contact@gymowl.in">contact@gymowl.in</a>
              </div>
                
              </div>
            </div>
            <div class="vosh1">
              <div className='au'>
                <h3 class="h3">Call us</h3>
                <p>We are available 24/7 for you.</p>
                <div className='zoi'>
            <i class="bi  bi-telephone-forward"></i>
                <a href="">          +91 6398730468</a>
                
                {/* <a href="">+91 9627635669</a> */}
                </div>
              </div>
            </div>
          </div>

        </div>


        <div class="col-md-7 zam">
          <div class="contact_feedback__ldaRn wow " >
            <h2 class="h2">Schedule a free demo</h2>
            <p>Please fill out the following information and we'll be in touch with you shortly to schedule a free demo presentation.</p>
            <div class="contact-froms">
              <form action="https://gymowl.in/contact-form" method="POST" class="contact-form">
                <input type="hidden" name="_token" value="bHciQOpVthl965hDUuqMw0ZSmwTHIqNnizHrGsgv" />              <div class="row">
                  <div class="col-md-6">
                    <input type="      text" name="name" placeholder="      Name" className='form' required="" />
                  </div>
                  <div class="col-md-6">
                    <input type="phone" name="mobile" placeholder="     Mobile" className='form' required="" />


                  </div>
                  <div class="col-md-6 ">
                    <input type="email" name="email" placeholder="      Email" required="" className='form' />
                  </div>
                  <div class="col-md-6">
                    <select id="businee" name="    Business" className='form1'>
                      <option  value="volvo"> <p>Classes Type</p></option>
                      <option value="volvo">Zumba</option>
                      <option value="saab">Aerobcs</option>
                      <option value="fiat">Cardio</option>
                      <option value="audi">Others</option>
                    </select>
                  </div>
                </div>
              </form></div>
<div className='fom'>
            <textarea name="comment" placeholder="      Comment" required=""className='fom1' spellcheck="false"></textarea></div>
            <button type="submit" class="primaryBtn ripple header_headerPrimaryBtn__1fcNx form2 "><span class="btn-text">Send Your Message</span> </button>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
