/* eslint-disable react/jsx-filename-extension */
import React, { Component, createRef } from 'react';
import video from './video.mp4';


class Video extends Component {
    video = createRef()

    // eslint-disable-next-line react/sort-comp
    play() {
      this.video.current.play();
    }

    pause() {
      this.video.current.pause();
    }

    setVolume(param) {
      this.video.current.volume = param;
    }

    setTime(param) {
      this.video.current.currentTime = param;
    }

    componentDidMount() {
      const videoElem = this.video.current;

      videoElem.onloadedmetadata = (event) => {
        this.props.handleSetVideoDuration(videoElem.duration);
      };

      videoElem.ontimeupdate = (event) => {
        this.props.handleUpdateCurrentTime(videoElem.currentTime);
      };

      videoElem.onended = (event) => {
        this.props.handleUpdatePlaying(false);
      };
    }

    render() {
      return (
        <div className="Container-Video">
          <video className="vid" ref={this.video}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      );
    }
}

export default Video;
