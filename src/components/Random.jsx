import React from 'react';

function Random({ min, max }) {
  const number = Math.random() * (max - min) + min;
  return (
    <div className="random-container">
      <h1>Your random number is: {number}</h1>
    </div>
  );
}

export default Random;
