import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [num, setNum] = useState(0)

  const checkSize = () => {
    setNum(window.innerWidth)
  }
  useEffect(() => {
    console.log('UseEffect was called.')
    window.addEventListener('resize', checkSize)
    
  })
  return ( 
    <>
    <h2>useEffect cleanup</h2>;
    <h1>{num}</h1>
    </>
  )
};

export default UseEffectCleanup;
