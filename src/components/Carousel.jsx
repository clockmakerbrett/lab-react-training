import React from 'react';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  handleRightClick = () => {
    this.navigate(1);
  };

  handleLeftClick = () => {
    this.navigate(-1);
  };

  navigate(value) {
    const currentIndex = this.state.index;
    const numOfImgs = this.props.imgs.length;
    const index = (currentIndex + value + numOfImgs) % numOfImgs;
    this.setState({
      index,
    });
  }

  render() {
    return (
      <div className="carousel">
        <button onClick={this.handleLeftClick}>&lt;</button>
        <img src={this.props.imgs[this.state.index]} alt="I dunno" />
        <button onClick={this.handleRightClick}>&gt;</button>
      </div>
    );
  }
}

export default Carousel;
