import React from 'react';
import './Welcome.css';
import  wpo from './utils/wpo.jpg'; 

const Welcome = () => {
  return (<div className='wom'>
    {/* <h1 className='qom'>The Women Fitness</h1> */}
    <div className='container-fluid wel '>
        <div className='container-fluid wel-left'>
          <h6>STAY IN POSE</h6>
            <h1 className='container-fluid hel'> STAY HEALTHY WITH,<br/>
            THE WOMEN FITNESS
            </h1>
            <h4 className='container-fluid'>Train with us, and you'll not only be part of the <br/>
            team, you'll be part of the family. </h4>
            <button className='b'><a href='/home'>Learn More</a></button>
            <button className='b'><a href='/contact'> Contact Us</a></button>
        </div>
        <div className='container-fluid wel-right'>
            <img className='container-fluid' src={wpo} alt=''/>
        </div>
        
      
    </div>
    <div class="row rom">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card join">
        <div class="card-body">
          <h5 class="card-title">High Quality Exercise Services</h5>
          
          <a href="/about" class="btn ">About Us</a>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card joi">
        <div class="card-body">
          <h5 class="card-title">Personal Training Services</h5>
         
          <a href="/classes" class="btn ">Join Our Classes</a>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Welcome;
