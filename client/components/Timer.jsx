import React, { Component } from 'react';

const formattedSeconds = sec => Math.floor(sec / 60) + ':' + ('0' + sec % 60).slice(-2);

class Timer extends Component {
  componentDidMount() {
    this.props.handleStartClick();
  }

  render() {
    if (this.props.secondsLeft === 0) {
      this.props.getNextQuestion();
      this.props.handleStartClick();
    }
    return (
      <div className="stopwatch">
        <h1 onClick={this.props.handleStartClick} className="stopwatch-timer">{formattedSeconds(this.props.secondsLeft)}</h1>
      </div>
    );
  }
}

export default Timer;
