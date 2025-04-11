import React from 'react'
import './Aerobics.css';
import cl9 from '../utils/cl9.jpg'

const Aerobics = () => {
  return (
    <div className='aerobcs'>
    <div className='aerobcs-left'><img src={cl9} alt=''/></div>
    <div className='aerobcs-right'>
      <h1> AEROBICS CLASSES</h1><br/>
      <p>Aerobic exercises, which includes walking, running, and swimming, has been proven to be an effective way for burning fat and losing weight. Aerobic exercise was also a more efficient method of exercise for losing body fat.</p>
    </div>
  </div>
  )
}

export default Aerobics
