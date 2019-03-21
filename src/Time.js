/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class Time extends Component {
    ConverDuration = () => {
      let finalSec = parseInt(this.props.videoDuration);

      let finalMin = 0;
      while (finalSec > 59) {
        finalSec -= 60;
        finalMin += 1;
      }
      return (`${finalMin}:${finalSec}`);
    }

    ConverTime = () => {
      let sec = parseInt(this.props.currentTime);
      let min = 0;
      while (sec > 59) {
        sec -= 60;
        min += 1;
      }
      return (`${min}:${sec}`);
    }

    render() {
      return (
        <div className="Time">
          {this.ConverTime()}
          {' '}
/
          {' '}
          {this.ConverDuration()}
        </div>
      );
    }
}

export default Time;
