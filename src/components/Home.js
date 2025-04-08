import React from 'react';
import './Home.css';
import slider5 from './utils/slider5.jpg';
import c2 from './utils/c2.png';
import c4 from './utils/c4.png';
import cw1 from './utils/cw1.png';
import un from './utils/un.png';
import slider6 from './utils/slider6.jpg';
import our1 from './utils/our1.png';
import kick from './utils/kick.png';
import zy from './utils/zy.jpg';
import som from './utils/som.jpg';
import zam from './utils/zam.png';
import py from './utils/py.jpg';
import fw from './utils/fw.jpg';
import sam from './utils/sam.jpg';
import fem from './utils/fem.png';

const Home = () => {
  return (<div className='main1'>
    {/* (<div className='main'>
    <h1>Welcome to the Women Fitness</h1>
  <h5>Take care of your body. It's the only place you have to live.</h5><br/> */}
    <div className='var' id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          {/* <p>gcfjytdgj</p> */}
          <img src={cw1} class="d-block w-100 custom-img" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={c4} class="d-block w-100 custom-img" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={un} class="d-block w-100 custom-img" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div className='main'>
      <h1>Welcome to the Women Fitness</h1>
      <h5>Take care of your body. It's the only place you have to live.</h5><br />
      <div class="container-fluid py-3">
        <div class="row py-1">
          <div class="col-sm-4 ma">
            <h4 class="text-center"> BOXING</h4>
            <img  className='boy' src={fem} alt="kick" width="100%" height="300px" />

          </div>
          <div class="col-sm-4 ma">
            <h4 class="text-center">AEROBCS</h4>
            <img src={zy}className='boy' alt="aerobcs" width="100%" height="300px" />

          </div>
          <div class="col-sm-4 ma">
            <h4 class="text-center">STRENGTH</h4>
            <img src={som}className='boy' alt="strength" width="100%" />

          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 ma">
            <img src={slider5} alt="" className='boy' width="100%" height="499" />
          </div>
          <div class="col-sm-8 ma">
            <iframe  width="100%" height="500" className='boy' src="https://www.youtube.com/embed/enYITYwvPAQ?controls=1&amp;controls=1" allowfullscreen=""></iframe>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 ma">
            <img src={fw} alt=""className='boy' width="100%" />
            <h4 class="text-center">FREE WEIGHTS</h4>
          </div>
          <div class="col-sm-4 ma">
            <img src={py} alt=""className='boy' width="100%" />
            <h4 class="text-center">POWER YOGA</h4>
          </div>
          <div class="col-sm-4 ma">
            <img src={sam} alt=""className='boy' width="100%" height="300px" />
            <h4 class="text-center">ZUMBA</h4>
          </div>
        </div>
      </div>
      <div class="our">
        <div class="our-left">
          <h2>Our Journey to Fitness: Empowerment Through Health and Strength</h2>
          <p>Our journey began with a simple goal: to feel strong, confident, and healthy. As women, we often face pressures to meet certain standards,<br />
            whether in appearance or fitness, and it can be easy to lose sight of the importance of health and self-care. But we decided to take control <br />
            and redefine what fitness means to us—not just as a way to look a certain way, but as a path to personal empowerment.</p>
          <p>At first, it wasn’t easy. There were days when the motivation wasn’t there, and other days when life got in the way. But we made a commitment—to<br />
            ourselves and to each other. Slowly but surely, we started showing up. Whether it was morning runs, strength training, yoga, or simply going for a <br />
            walk, each day we became more connected to our bodies and the strength we hold within.</p>


          <p>This is our story—one of empowerment, strength, and most importantly, self-love. And we know this is just the beginning.</p>
        </div>
        <div class="our-right">
          <img src={our1} alt="Fitness Journey" />
        </div>
      </div>
    </div>
    <div class="container-fluid dish py-5">
      <div class="container text-light">
        <h2 class="text-center text-danger">OUR ADVANTAGES</h2>
        <div class="row py-3 ">
          <div class="col-sm-6">
            <h4>Qualified trainers</h4>
            <p>We're sure that one time or another, you've been fascinated at how a trainer facilitates class and engages learners. Youâ€™ve also most likely observed some of the best qualities of a good trainer and already somewhat have an idea of what attributes make a trainer great at their work.</p>
          </div>
          <div class="col-sm-6">
            <h4>Individual training</h4>
            <p>A personal trainer is an individual certified to have a varying degree of knowledge of general fitness involved in exercise prescription and instruction. They motivate clients by setting goals and providing feedback and accountability to clients.</p>
          </div>
          <div class="col-sm-6">
            <h4>Multiple classis</h4>
            <p>We provides multiple classes to our clints  Zumba, Aerobics, Kickboxing, Strenght, Power yoga, Free weight.</p>
          </div>
          <div class="col-sm-6">
            <h4>Hightech gym</h4>
            <p>Monitoring performance during the one-hour workout, from wearable devices to projection screens, which help in getting solidity from long slogans on cardio devices, make use of modern technology to enhance the experience of today's gym exercise.</p>
          </div>
          <div class="col-sm-6">
            <h4>Men and Women's changing rooms</h4>
            <p>Maecenas mattis vitae tellus vel interdum. Quisque lacinia mauris id convallis pretium. Aliquam id odio sit amet mauris.</p>
          </div>
          <div class="col-sm-6">
            <h4>Complimentary Drinks</h4>
            <p>Maecenas mattis vitae tellus vel interdum. Quisque lacinia mauris id convallis pretium. Aliquam id odio sit amet mauris.</p>
          </div>
          <div class="col-sm-6">
            <h4>Towels and Lockers</h4>
            <p>Maecenas mattis vitae tellus vel interdum. Quisque lacinia mauris id convallis pretium. Aliquam id odio sit amet mauris.</p>
          </div>
          <div class="col-sm-6">
            <h4>Free Wi-Fi Zone</h4>
            <p>Maecenas mattis vitae tellus vel interdum. Quisque lacinia mauris id convallis pretium. Aliquam id odio sit amet mauris.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
};

export default Home;
