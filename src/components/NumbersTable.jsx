import React from 'react';

const NumbersTable = (props) => {
  const array = [];
  for (let i = 1; i <= props.limit; i++) {
    array.push(i);
  }
  return (
    <div>
      {array.map((value) => {
        return (
          <p style={{ backgroundColor: value % 2 === 0 ? 'red' : 'white' }}>
            {value}
          </p>
        );
      })}
    </div>
  );
};

export default NumbersTable;
