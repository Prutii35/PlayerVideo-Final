/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class PlayButton extends Component {
  render() {
    return (
      <i className={this.props.isPlaying ? 'fas fa-pause' : 'fas fa-play'} onClick={this.props.handleChangePlaying} style={{ marginLeft: '4%' }} />
    );
  }
}

export default PlayButton;
