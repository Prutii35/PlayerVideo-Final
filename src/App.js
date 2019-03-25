/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React, { Component, createRef } from 'react';
import './App.css';
import video from './video.mp4';

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
      fullScreenCheck: false,
    };
  }

  componentWillMount() {
    document.addEventListener('fullscreenchange', this.exitFullscreen);
    document.addEventListener('webkitfullscreenchange', this.exitFullscreen);
    document.addEventListener('mozfullscreenchange', this.exitFullscreen);
    document.addEventListener('MSFullscreenChange', this.exitFullscreen);
  }

  componentDidMount() {
    const videoElem = this.video.current;

    videoElem.onloadedmetadata = (event) => {
      this.setState({
        // eslint-disable-next-line radix
        videoDuration: parseInt(videoElem.duration),
      });
    };

    videoElem.ontimeupdate = (event) => {
      this.setState({
        videoCurrentTime: videoElem.currentTime,
      });
    };

    videoElem.onended = (event) => {
      this.setState({
        isPlaying: false,
      });
    };
  }

  exitFullscreen = () => {
    if (!document.fullscreenElement
     && !document.webkitIsFullScreen
     && !document.mozFullScreen
     && !document.msFullscreenElement) {
      this.setState({
        fullScreenCheck: false,
      });
    }
  }

  onChangeFullScreen = () => {
    if (!this.state.fullScreenCheck) {
      openFullscreen();
      this.setState({
        fullScreenCheck: true,
      });
    } else {
      closeFullscreen();
      this.setState({
        fullScreenCheck: false,
      });
    }
  }

  changePlaying = () => {
    const videoElem = this.video.current;
    if (this.state.isPlaying) {
      videoElem.pause();
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
      videoElem.play();
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

  updateSound = (event) => {
    const volume = event.target;
    const videoElem = this.video.current;
    // eslint-disable-next-line eqeqeq
    if (volume.value != 0) {
      videoElem.volume = (volume.value / 100);
      this.setState({
        volume: volume.value / 100,
        mute: false,
      });
    } else {
      videoElem.volume = 0;
      this.setState({
        volume: 0,
        mute: true,
      });
    }
  }

  muteSound = () => {
    const videoElem = this.video.current;
    if (this.state.mute) {
      if (!this.state.volume) {
        videoElem.volume = 0.5;
        this.setState({
          volume: 0.5,
        });
      }
      videoElem.muted = false;
      this.setState({
        mute: false,
      });
    } else {
      videoElem.muted = true;
      this.setState({
        mute: true,
      });
    }
  }

  UpdateProgressBar = (event) => {
    const progBar = event.target;
    const videoElem = this.video.current;

    videoElem.currentTime = (progBar.value);
    this.setState({
      videoCurrentTime: progBar.value,
    });
  }

  render() {
    return (
      <div className={this.state.fullScreenCheck ? 'Container-FullScreen' : 'Container'}>
        <div className="Container-Video">

          <div className="Container-Titlu">
            <span className="Text-Titlu">
              {'MAX - Lights Down Low feat. gnash (Official Video)'}
            </span>
          </div>

          <ClickOnScreen
            handleChangePlaying={this.changePlaying}
            fullScreenCheck={this.state.fullScreenCheck}
          />

          <video className="vid" ref={this.video}>
            <source src={video} type="video/mp4" />
          </video>

          <Buttons
            isPlaying={this.state.isPlaying}
            mute={this.state.mute}
            volume={this.state.volume}
            currentTime={this.state.videoCurrentTime}
            videoDuration={this.state.videoDuration}
            fullScreenCheck={this.state.fullScreenCheck}
            handleChangePlaying={this.changePlaying}
            handleUpdateSound={this.updateSound}
            handleMuteSound={this.muteSound}
            handleUpdateProgressBar={this.UpdateProgressBar}
            handleChangeFullScreen={this.onChangeFullScreen}
          />

        </div>
      </div>


    );
  }
}

export default App;
