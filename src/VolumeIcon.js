/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class VolumeIcon extends Component {
    Mute = () => {
      if (this.props.mute) {
        this.props.handleMuteSound();
        const volumeBar = document.getElementsByClassName('volumeBar')[0];
        volumeBar.value = 50;
      }
      else {
        this.props.handleMuteSound();
        const volumeBar = document.getElementsByClassName('volumeBar')[0];
        volumeBar.value = 0;
      }
    }

    render() {
      return (
        <i
          className={this.props.volume ? 'fas fa-volume-up' : 'fas fa-volume-down'}
          style={{ marginLeft: '1%' }}
          onClick={this.Mute}
        />
      );
    }
}

export default VolumeIcon;
