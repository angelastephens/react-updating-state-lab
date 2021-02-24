// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Initial state is defined
    this.state = {
      timesClicked: 0,
    };
  }

  // when handleClick is called, setState will update
  handleClick = () => {
    this.setState({
        timesClicked: +this.state.timesClicked + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker;