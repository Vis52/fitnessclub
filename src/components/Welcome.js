import React from 'react';
import './Welcome.css';
import wpo from './utils/wpo.jpg'; 
import home1 from './utils/home1.png';

const Welcome = () => {
  return (
    <div className='imh'>
      <div className='container-fluid'>
        <img className='container-fluid ' src={home1} alt='' />
      </div>

      <div className='wom'>
        <div className='container-fluid wel'>
          <div className='container-fluid wel-left'>
            <h6>STAY IN POSE</h6>
            <h1 className='container-fluid hel'>
              STAY HEALTHY WITH,<br />
              THE WOMEN FITNESS
            </h1>
            <h4 className='container-fluid'>
              Train with us, and you'll not only be part of the <br />
              team, you'll be part of the family.
            </h4>
            <button className='b'><a href='/home'>Learn More</a></button>
            <button className='b'><a href='/contact'>Contact Us</a></button>
          </div>

          <div className='container-fluid wel-right'>
            <img className='container-fluid' src={wpo} alt='' />
          </div>
        </div>

        <div className='row rom'>
          <div className='col-sm-6 mb-3 mb-sm-0'>
            <div className='card join'>
              <div className='card-body'>
                <h5 className='card-title'>High Quality Exercise Services</h5>
                <a href='/about' className='btn'>About Us</a>
              </div>
            </div>
          </div>

          <div className='col-sm-6'>
            <div className='card joi'>
              <div className='card-body'>
                <h5 className='card-title'>Personal Training Services</h5>
                <a href='/classes' className='btn'>Join Our Classes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
