import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="driver">
      <h3>{props.name}</h3>
      <Rating>{props.rating}</Rating>
      <img src={props.img} alt="foo" />
      <small>
        {props.car.model} - {props.car.licensePlate}
      </small>
    </div>
  );
}

export default DriverCard;
