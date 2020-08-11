import React, { Component } from 'react';
import profiles from '../data/berlin.json';

export class FaceBook extends Component {
  render() {
    return (
      <div className="container">
        {profiles.map((profile) => {
          return (
            <div className="facebook" key={profile.lastName}>
              <img src={profile.img} alt={profile.firstName} />
              <ul>
                <li>
                  First name: <span>{profile.firstName}</span>
                </li>
                <li>
                  Last name: <span>{profile.lastName}</span>
                </li>
                <li>
                  Country: <span>{profile.country}</span>
                </li>
                <li>
                  Type: <span>{profile.isStudent ? 'student' : 'teacher'}</span>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FaceBook;
