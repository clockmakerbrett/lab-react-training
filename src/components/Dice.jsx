import React from 'react';

class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
      src: this.rollTheDice(),
      rolling: false,
    };
  }

  rollTheDice() {
    const roll = Math.ceil(Math.random() * 6);
    return `/img/dice${roll}.png`;
  }

  handleClick = () => {
    if (!this.state.rolling) {
      this.setState({
        src: '/img/dice-empty.png',
        rolling: true,
      });
      setTimeout(() => {
        this.setState({
          src: this.rollTheDice(),
          rolling: false,
        });
      }, 1000);
    }
  };

  render() {
    return (
      <div className="dice-container" onClick={this.handleClick}>
        <img src={this.state.src} alt="die" />
      </div>
    );
  }
}

export default Dice;
