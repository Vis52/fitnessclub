import React from 'react'
import cl1 from '../utils/cl1.jpg'
import './Gym.css'

const Gym = () => {
  return (
    <div className='c10'>
    <div className='c10-left'><img src={cl1} alt=''/></div>
    <div className='c10-right'>
      <h1> Cardio</h1><br/>
      <p>Exercise and rest are the cornerstones of improving your quality of life.<br/> It's not always easy but it's always worth it. When you find fitness routine<br/> you enjoy, you'll feel better, look better and be happier in your own skin.</p>
    </div>
  </div>
  )
}

export default Gym
