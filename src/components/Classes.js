import React from 'react';
import './Classes.css';
import cl1  from './utils/cl1.jpg';
import cl2 from './utils/cl2.webp';
import cl3 from './utils/cl3.jpg';
import cl4 from './utils/cl4.avif';
import cl5 from './utils/cl5.jpg';
import cl6 from './utils/cl6.jpg';
import cl7 from './utils/cl7.jpg';
import cl8 from './utils/cl8.avif';
import cl9 from './utils/cl9.jpg';
import cl10 from './utils/cl10.jpg';
import cl11 from './utils/cl11.avif';
import cl12 from './utils/cl12.avif'; 
import banner from './utils/banner.png';
const Classes = () => {
  return (<div className='c-main'>
    <h1 className='bom'>Classes of Our Gym</h1>
    <h4>Take care of your body. It's the only place you have to live.</h4>
    <div className='c10'>
      <div className='c10-left'><img src={cl1} alt=''/></div>
      <div className='c10-right'>
        <h1> Cardio</h1><br/>
        <p>Exercise and rest are the cornerstones of improving your quality of life.<br/> It's not always easy but it's always worth it. When you find fitness routine<br/> you enjoy, you'll feel better, look better and be happier in your own skin.</p>
      </div>
    </div>
    <div className='zumba'>
      <div className='zumba-left'><img  src={cl3} alt=''/></div>
      <div className='zumba-right'><h1>POWER YOGA</h1>
      <p>one up, slim down, and find balance with this high-energy summer workout from power yoga. It brings inner peace, a spiritual boost, <br/> an unparalleled measure of serenity.Power yoga is a general term<br/> used to describe a vigorous.</p></div>
    </div>
    <div className='aerobcs'>
      <div className='aerobcs-left'><img src={cl9} alt=''/></div>
      <div className='aerobcs-right'>
        <h1> AEROBICS CLASSES</h1><br/>
        <p>Aerobic exercises, which includes walking, running, and swimming, has been proven to be an effective way for burning fat and losing weight. Aerobic exercise was also a more efficient method of exercise for losing body fat.</p>
      </div>
    </div>
    <div className='free'>
      <div className='free-left'><img src={cl11} alt=''/></div>
      <div className='free-right'>
        <h1> FREE WEIGHTS FLOOR</h1><br/>
        <p>We have an extensive range of free weights and benches, with dumbbells, an array of plate loaded strength equipment, Olympic <br/>lifting platforms, power cages, kettlebells, and gymnastic rings.</p>
      </div>
    </div>
    <div className='out'>
      <div className='out-left'><img src={cl6} alt=''/></div>
      <div className='out-right'>
        <h1> CIRCUIT TRAINING</h1><br/>
        <p>Circuit training is a fast-paced class in which you do one exercise for 30 seconds to 5 minutes and then move on to another exercise. and Increases your strength and aerobic fitness and burns lots of calories. Item's like a game where Everyone begins at a station.</p>
      </div>
    </div>
    <div className='bhan'>
      <div className='bhan-left'><img src={cl12} alt=''/></div>
      <div className='bhan-right'>
        <h1> BHANGRA</h1><br/>
        <p>The term Bhangra refers to the traditional dance from the Indian subcontinent originating in the Majha area of the Punjab region.The dance was associated primarily with the spring harvest festival Baisakhi, and it is from one of the major products of the harvest bhangra that bhangra drew its name.</p>
      </div>
    </div>
    <div class="container-fluid price ">
      <h1>Pricing Table</h1>
  <div class="row proce">
    <div class="col price1">
      <h2>Our Pricing
       Model</h2>
      
      
      <hr/>
      <h4>Hey! Need a Custom<br/>
      Plan</h4>
      <br/>
      <p>This model defines the prices of our<br/> classes
       according to your plan like <br/>monthly
        plan, hourly plan, yearly plan</p>
      
      
      <button><a href='/Book'>Get Started</a></button>
          
    </div>
    <div class="col price2 order-5">
    <h2>Monthly Plan</h2>
    <h1>$90/Hour</h1>
    <ul>
<li>Fixed monthly fee</li>

<li>Cost-effective for regular users</li>

<li>Multiple membership tiers</li>

<li>Auto-renewal available</li>

<li>Flexible gym access</li>

<li>Encourages workout consistency</li>

<li>Member discounts and perks</li>

<li>Includes group classes or wellness services</li>



<li>Pause/freeze membership option</li>

<li>Access to online fitness content</li>

<li>Progress tracking tools included</li>
    </ul>
     
      
    </div>
    <div class="col price3 order-1">
    <h2>Hourly Plan</h2>
    <h1>$3/Hour</h1>
    <ul>
      <li>Pay-as-you-go</li>
      <li>No long-term commitment</li>
      <li>Custom Pricing</li>
      <li>Time Tracking System</li>
    </ul>
    
    </div>
    
  </div>
  
</div>
<div className='banner'>
  <h1>
    Exciting Offer For New Members
  </h1>
  <img src={banner} alt=''/>
</div>
  </div>



   




  )
}

export default Classes;
