import React, { useState } from 'react';

const UseStateCounter = () => {
  const [num, setNum] = useState(0)
  return <>
    <h1>{num}</h1>
    <button className='btn' onClick={() => {setNum(num - 1)}}>Decrease</button>
    <button className='btn' onClick={() => {setNum(0)}}>Reset</button>
    <button className='btn' onClick={() => {setNum(num + 1)}}>Increase</button>
  
  </>;
};

export default UseStateCounter;
