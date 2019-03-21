/* eslint-disable react/sort-comp */
import React, { Component, createRef } from 'react';
import './App.css';

import Title from './Title.js';
import Video from './Video.js';
import Buttons from './Buttons.js';
import ClickOnScreen from './ClickOnScreen.js';


function openFullscreen() {
  if (document.body.requestFullscreen) {
    document.body.requestFullscreen();
  } else if (document.body.mozRequestFullScreen) { /* Firefox */
    document.body.mozRequestFullScreen();
  } else if (document.body.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    document.body.webkitRequestFullscreen();
  } else if (document.body.msRequestFullscreen) { /* IE/Edge */
    document.body.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

class App extends Component {
  video = createRef()

  constructor() {
    super();
    this.state = {
      isPlaying: false,
      volume: 0.5,
      mute: false,
      videoCurrentTime: 0,
      videoDuration: 0,
      fullscreenCheck: false,
    };
  }

  exitFullscreen = () => {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
      this.setState({
        fullscreenCheck: false,
      });
    }
  }

  onChangeFullScreen = () => {
    if (!this.state.fullscreenCheck) {
      openFullscreen();
      this.setState({
        fullscreenCheck: true,
      });
    } else {
      closeFullscreen();
      this.setState({
        fullscreenCheck: false,
      });
    }
  }

  ChangePlaying = () => {
    const video = this.video.current;
    if (this.state.isPlaying === true) {
      video.pause();
      // icon on screen
      /*
      const icon = document.getElementsByClassName('imgOnScreen')[1];
      icon.style.visibility = 'visible';
      icon.style.opacity = 0.7;
      setTimeout(() => {
        icon.style.visibility = 'hidden';
        icon.style.opacity = '0';
      }, 1000);
      // */
    } else {
      video.play();
      // icon om screen
      /*
      const icon = document.getElementsByClassName('imgOnScreen')[0];
      icon.style.visibility = 'visible';
      icon.style.opacity = 0.7;
      setTimeout(() => {
        icon.style.visibility = 'hidden';
        icon.style.opacity = '0';
      }, 1000);
      // */
    }
    this.setState(prevState => ({
      isPlaying: !(prevState.isPlaying),
    }));
  }

  UpdateSound = (event) => {
    const volume = event.target;
    const videoElem = this.video.current;
    // eslint-disable-next-line eqeqeq
    if (volume.value != 0) {
      videoElem.setVolume(volume.value / 100);
      this.setState({
        volume: volume.value / 100,
        mute: false,
      });
    } else {
      videoElem.setVolume(0);
      this.setState({
        volume: 0,
        mute: true,
      });
    }
  }

  MuteSound = () => {
    const videoElem = this.video.current;
    if (this.state.mute) {
      videoElem.setVolume(0.5);
      this.setState({
        volume: 0.5,
        mute: false,
      });
    } else {
      videoElem.setVolume(0);
      this.setState({
        volume: 0,
        mute: true,
      });
    }
  }

  UpdateCurrentTime = (param) => {
    this.setState({
      videoCurrentTime: param,
    });
  }

  SetVideoDuration = (param) => {
    this.setState({
      // eslint-disable-next-line radix
      videoDuration: parseInt(param),
    });
  }

  UpdatePlaying = (param) => {
    this.setState({
      isPlaying: param,
    });
  }


  UpdateProgressBar = (event) => {
    const progBar = event.target;
    const videoElem = this.video.current;

    videoElem.setTime(progBar.value);
    this.setState({
      videoCurrentTime: progBar.value,
    });
  }

  componentWillMount() {
    document.addEventListener('fullscreenchange', this.exitFullscreen);
    document.addEventListener('webkitfullscreenchange', this.exitFullscreen);
    document.addEventListener('mozfullscreenchange', this.exitFullscreen);
    document.addEventListener('MSFullscreenChange', this.exitFullscreen);
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className={this.state.fullscreenCheck ? 'Container-FullScreen' : 'Container'}>
        <div>
          <Title title="MAX - Lights Down Low feat. gnash (Official Video)" />
        </div>

        <ClickOnScreen
          handleChangePlaying={this.ChangePlaying}
        />

        <div>
          <Video
            ref={this.video}
            volume={this.state.volume}
            handleUpdateCurrentTime={this.UpdateCurrentTime}
            handleUpdatePlaying={this.UpdatePlaying}
            handleSetVideoDuration={this.SetVideoDuration}
            />
        </div>

        <Buttons
          isPlaying={this.state.isPlaying}
          mute={this.state.mute}
          volume={this.state.volume}
          currentTime={this.state.videoCurrentTime}
          videoDuration={this.state.videoDuration}
          fullscreenCheck={this.state.fullscreenCheck}
          handleChangePlaying={this.ChangePlaying}
          handleUpdateSound={this.UpdateSound} 
          handleMuteSound={this.MuteSound}
          handleUpdateProgressBar={this.UpdateProgressBar}
          handleChangeFullScreen={this.onChangeFullScreen}
        />
      </div>
    );
  }
}

export default App;
