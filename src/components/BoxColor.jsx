import React from 'react';

function Random({ r, g, b }) {
  const value = `rgb(${r}, ${g}, ${b})`;
  return (
    <div className="box-color-container" style={{ backgroundColor: value }}>
      <p>
        This color is rgb({r}, {b}, {g})
      </p>
    </div>
  );
}

export default Random;
