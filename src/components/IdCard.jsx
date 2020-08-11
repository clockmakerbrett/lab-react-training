import React from 'react';

function IdCard(props) {
  const {
    pictureUrl,
    firstName,
    lastName,
    gender,
    height,
    dateOfBirth,
  } = props;
  return (
    <div className="id-card-container">
      <img src={pictureUrl} alt="" />
      <ul>
        <li>
          <strong>First Name: </strong>
          {firstName}
        </li>
        <li>
          <strong>Last Name: </strong>
          {lastName}
        </li>
        <li>
          <strong>Gender: </strong>
          {gender}
        </li>
        <li>
          <strong>Height: </strong>
          {height}
        </li>
        <li>
          <strong>Date of Birth: </strong>
          {dateOfBirth.toString()}
        </li>
      </ul>
    </div>
  );
}

export default IdCard;
