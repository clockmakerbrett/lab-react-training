import React from 'react';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      glasses: false,
    };
  }

  handleClick = () => {
    this.setState({
      glasses: !this.state.glasses,
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        <img
          src={
            this.state.glasses
              ? '/img/persons/maxence-glasses.png'
              : '/img/persons/maxence.png'
          }
          alt="guy"
        />
      </button>
    );
  }
}

export default LikeButton;
