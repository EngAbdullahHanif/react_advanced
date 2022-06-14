import React, { useState } from 'react';

const UseStateCounter = () => {
  const [num, setNum] = useState(0)
  const ComplexCounter = () => {
    setTimeout(() => {
      setNum((preNum) => {
        return preNum + 1
      })
    }, 2000)
  }
  return <> 
  ‍  <section>
      <h1>Regualr Counter</h1>
      <h1>{num}</h1>
      <button className='btn' onClick={() => {setNum(num - 1)}}>Decrease</button>
      <button className='btn' onClick={() => {setNum(0)}}>Reset</button>
      <button className='btn' onClick={() => {setNum(num + 1)}}>Increase</button>
    </section>
    <section>
      <h1>Complex Counter</h1>
      <h1>{num}</h1>
      <button className='btn' onClick={ComplexCounter}>Increase</button>
    </section>
  </>;
};

export default UseStateCounter;
