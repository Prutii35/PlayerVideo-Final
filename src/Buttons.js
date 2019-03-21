/* eslint-disable import/extensions */
import React, { Component } from 'react';
import PlayButton from './PlayButton.js';
import FullScreenIcon from './FullScreenIcon.js';
import VolumeBar from './VolumeBar.js';
import VolumeIcon from './VolumeIcon.js';
import ProgressBar from './ProgressBar.js';
import Time from './Time.js';

// eslint-disable-next-line react/prefer-stateless-function
class Buttons extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className={this.props.fullscreenCheck ? 'Container-Buttons-FullScreen' : 'Container-Buttons'}>
        <ProgressBar
          currentTime={this.props.currentTime}
          videoDuration={this.props.videoDuration}
          handleUpdateProgressBar={this.props.handleUpdateProgressBar}
        />
        <PlayButton
          isPlaying={this.props.isPlaying}
          handleChangePlaying={this.props.handleChangePlaying}
        />
        <VolumeIcon
          volume={this.props.volume}
          handleMuteSound={this.props.handleMuteSound}
          mute={this.props.mute}
        />
        <VolumeBar
          handleUpdateSound={this.props.handleUpdateSound}
        />
        <Time
          currentTime={this.props.currentTime}
          videoDuration={this.props.videoDuration}
        />
        <FullScreenIcon
          fullScreenCheck={this.props.fullscreenCheck}
          handleChangeFullScreen={this.props.handleChangeFullScreen}
        />
      </div>
    );
  }
}

export default Buttons;
