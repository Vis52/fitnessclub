import React from 'react';
import logo9 from './utils/logo9.png';
import './Footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
  <div class="container-fluid footer">
    <div class="row footer1">
      <div class="col-9"><h1>Let's Connect Here </h1> 
      
  </div></div>
  <hr/>
      <div class="container-fluid ">
  <div class="row">
    <div class="col footer2">
      <img src={logo9} alt=''/><br/>
      <br/>
      <ul>
        <li>Empowers Strength</li>
        <li> Build Confidence</li>
        <li>Overall Movement</li>
      </ul>
     
           <i className="bi bi-twitter" style={{ fontSize: '24px', color:'',}}> </i>
           <i className="bi bi-instagram" style={{ fontSize: '24px', marginLeft: '30px', color:'',}}></i>
           <i className="bi bi-facebook" style={{ fontSize: '24px' ,marginLeft: '30px', color:'',}}></i>
    </div>
    <div class="col footer3 order-5">
      <h3>Contact Details </h3>
      <ul>
        <li><a href=''>+91-6398730468</a></li>
        <li><a href=''>myselfvishal954@gmail.com</a></li>
        <li><a href='https://womenfitnesss.netlify.app/'> The Women Fitness</a></li>
        <li><a href=''>2464 Noida U.P.</a></li>
      </ul>
    </div>
    <div class="col footer4 order-1">
    <h3>Quick Links</h3>
      <ul>
        <li><a href=''>Home</a></li>
        <li><a href=''>About</a></li>
        <li><a href=''>Classes</a></li>
        <li><a href=''>Contact Us</a></li>
      </ul>
    </div>
    
  </div>
  
</div>
<hr/>

<div className='sam'>
  <p>Copyright @ 2025 <a href='/home'>Women Fitness</a>. All Right Desrved.</p>
  <p>User Terms & Conditions | Privacy Policy</p>
</div>

      
    </div>
  
  
  )};
   

export default Footer;
