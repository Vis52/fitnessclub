import React from 'react';
import './Classes.css';
import cl1  from './utils/cl1.jpg';
import cl2 from './utils/cl2.webp';
import cl3 from './utils/cl3.jpg';
import cl4 from './utils/cl4.avif';
import cl5 from './utils/cl5.jpg';
import cl6 from './utils/cl6.avif';
import cl7 from './utils/cl7.jpg';
import cl8 from './utils/cl8.avif';
import cl9 from './utils/cl9.jpg';
import cl10 from './utils/cl10.jpg';
import cl11 from './utils/cl11.avif';
import cl12 from './utils/cl12.avif'; 
const Classes = () => {
  return (



    <div class="container-fluid gito ">
      <h2 class="text-center text-uppercase mt-5" >Classes The Gym</h2>
      <p class="text-center font-italic">Take care of your body. It's the only place you have to live.</p>
      <div class=" row py-3">
        <div class="col-sm-6">
          <div class="brd ">
            <h5 class="text-center">GYM FITNESS</h5>
            <img className='clo' src={cl1} alt="" width="100%" />
            <p class="text-justify p-2">Exercise and rest are the cornerstones of improving your quality of life. It's not always easy but it's always worth it. When you find a fitness routine you enjoy, you'll feel better, look better and be happier in your own skin.</p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="brd">
            <h5 class="text-center">INDOOR CYCLING</h5>
            <img className='clo' src={cl2} alt="" width="100%"/>
            <p class="text-justify p-2">Cycling is a great form of exercise as well as a practical way to get around, but it also carries the risk of significant injury, especially head injury. involves using a special stationary exercise bicycle with a weighted flywheel in a classroom setting.</p>
          </div>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-sm-6">
          <div class="brd">
            <h5 class="text-center">POWER YOGA</h5>
            <img className='clo' src={cl3} alt="" width="100%"/>
            <p class="text-justify p-2">one up, slim down, and find balance with this high-energy summer workout from power yoga. It brings inner peace, a spiritual boost, and an unparalleled measure of serenity.Power yoga is a general term used to describe a vigorous.</p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="brd">
            <h5 class="text-center">CARDIO FITNESS</h5>
            <img src={cl4} alt="" width="100%"/>
            <p class="text-justify p-2">Cardio fitness is important to everyone. Quality cardio workouts can help everybody reach their health and fitness goals, whether those goals include new personal records for competition, lowering blood pressure, reducing cholesterol levels, managing diabetes.</p>
          </div>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-sm-6">
          <div class="brd">
            <h5 class="text-center">CARDIO KICK BOXING</h5>
            <img src={cl5} alt="" width="100%"/>
            <p class="text-justify p-2">Kickboxing not only gives you that fab figure, but also makes you stronger. Kickboxing has been a rage with fitness enthusiasts for some time now. For many people, it is a 'cool' workout option compared to gymming, which can be monotonous.</p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="brd">
            <h5 class="text-center">AEROBICS CLASSES</h5>
            <img src={cl6} alt="" width="100%"/>
            <p class="text-justify p-2">Aerobic exercises, which includes walking, running, and swimming, has been proven to be an effective way for burning fat and losing weight. Aerobic exercise was also a more efficient method of exercise for losing body fat.</p>
          </div>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-sm-6">
          <div class="brd">
            <h5 class="text-center">CIRCUIT TRAINING</h5>
            <img src={cl7} alt="" width="100%"/>
            <p class="text-justify p-2">Circuit training is a fast-paced class in which you do one exercise for 30 seconds to 5 minutes and then move on to another exercise. Increases your strength and aerobic fitness and burns lots of calories. Itâ€™s like a game where Everyone begins at a station.</p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="brd">
            <h5 class="text-center">ZUMBA</h5>
            <img src={cl8} alt="" width="100%"/>
            <p class="text-justify p-2">Are you ready to party yourself into shape? Forget the workout, just lose yourself in the music and find yourself in shape with fitness dance at The Gym. Zumba classes feature exotic rhythms set to high-energy Latin and international beats.</p>
          </div>
        </div>
      </div>
      <div class="row  py-3">
        <div class="col-sm-6">
          <div class="brd">
            <h5 class="text-center">STRENGTH CLASSES</h5>
            <img src={cl9} alt="" width="100%"/>
            <p class="text-justify p-2">If you are looking for an improvement in strength, aerobic and anaerobic fitness then our range of conditioning classes are what you need.Strength training is not only for building muscle mass.</p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="brd">
            <h5 class="text-center">OUTDOOR TRAINING</h5>
            <img src={cl10} alt="" width="100%"/>
            <p class="text-justify p-2">Outdoor Training includes Running Club, Park Fitness. This session caters for various paces and abilities and takes you out and around our wonderful city.One of the best ways to blast fat is to train outdoors.</p>
          </div>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-sm-6">
          <div class="brd">
            <h5 class="text-center">FREE WEIGHTS FLOOR</h5>
            <img src={cl11} alt="" width="100%"/>
            <p class="text-justify p-2">We have an extensive range of free weights and benches, with dumbbells, an array of plate loaded strength equipment, Olympic lifting platforms, power cages, kettlebells, and gymnastic rings.</p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="brd">
            <h5 class="text-center">Bhangra</h5>
            <img src={cl12} alt="" width="100%"/>
            <p class="text-justify p-2">The term Bhangra refers to the traditional dance from the Indian subcontinent originating in the Majha area of the Punjab region.The dance was associated primarily with the spring harvest festival Baisakhi, and it is from one of the major products of the harvestâ€”bhangâ€”that bhangra drew its name.</p>
          </div>
        </div>
      </div>
    </div>




  )
}

export default Classes;
