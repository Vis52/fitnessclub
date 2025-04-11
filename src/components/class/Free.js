import React from 'react'
import './Free.css';
import cl11 from '../utils/cl11.avif';

const Free = () => {
  return (
    <div className='free'>
    <div className='free-left'><img src={cl11} alt=''/></div>
    <div className='free-right'>
      <h1> FREE WEIGHTS FLOOR</h1><br/>
      <p>We have an extensive range of free weights and benches, with dumbbells, an array of plate loaded strength equipment, Olympic <br/>lifting platforms, power cages, kettlebells, and gymnastic rings.</p>
    </div>
  </div>
  )
}

export default Free
