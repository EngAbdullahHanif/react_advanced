import React, { useState } from 'react';

const UseStateBasics = () => {
  let [text, setText] =  useState('Hello World');
  const handleClick = () => {
    if (text === 'Hello World') {
      setText("Random World")
    } else {
      setText("Hello World")
    }
  }
  return (
    <React.Fragment>
        <h1>{text}</h1>
        <button onClick={handleClick} className="btn">
          change Title
        </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
