/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import pause from './pauseButton.png';
import play from './playButton.png';

class ClickOnScren extends Component {
  render() {
    return (
      <div className="Container-Click" onClick={this.props.handleChangePlaying}>
        <div className="MsgOnScreen">
          <img src={play} className="imgOnScreen" alt="PlayOnScreen" />
        </div>
        <div className="MsgOnScreen">
          <img src={pause} className="imgOnScreen" alt="PauseOnScreen" />
        </div>
      </div>
    );
  }
}

export default ClickOnScren;
