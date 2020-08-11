import React from 'react';

function Rating(props) {
  const stars = Math.round(parseFloat(props.children));
  let rating = '★'.repeat(stars) + '☆'.repeat(5 - stars);
  return <div>{rating}</div>;
}

export default Rating;
