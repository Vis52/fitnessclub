import React from 'react'
import './Bhangra.css';
import cl12 from '../utils/cl12.avif';

const Bhangra = () => {
  return (
    <div className='bhan'>
      <div className='bhan-left'><img src={cl12} alt=''/></div>
      <div className='bhan-right'>
        <h1> BHANGRA</h1><br/>
        <p>The term Bhangra refers to the traditional dance from the Indian subcontinent originating in the Majha area of the Punjab region.The dance was associated primarily with the spring harvest festival Baisakhi, and it is from one of the major products of the harvest bhangra that bhangra drew its name.</p>
      </div>
    </div>
    
      
    
  )
}

export default Bhangra;
