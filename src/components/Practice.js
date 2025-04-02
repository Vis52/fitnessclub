import { useState } from "react";
import React  from 'react';

const Practice  = () => {
    const [count, setCount] = useState(0);
    const change = ()=>{
       setCount(count+1);
    };
    const changeDec = ()=>{
        setCount(count-1);
    }
    
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={change}>+</button>
      <button onClick={changeDec}>-</button>
    </div>
  )
}

export default Practice;
