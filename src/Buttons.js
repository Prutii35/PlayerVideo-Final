import React from 'react';
import Time from './Time.js';

export default function Buttons(props) {
  return (
    <div className="Container-Buttons">
      <input // ProgressBar
        type="range"
        min="0"
        max={props.videoDuration}
        defaultValue="0"
        value={props.currentTime}
        className="bar"
        onChange={props.handleUpdateProgressBar}
      />
      <i // PlayButton
        className={props.isPlaying ? 'fas fa-pause' : 'fas fa-play'}
        onClick={props.handleChangePlaying}
        style={{ marginLeft: '4%' }}
      />
      <i // Volume Icon
        className={!props.mute ? 'fas fa-volume-up' : 'fas fa-volume-down'}
        onClick={props.handleMuteSound}
      />
      <div className="ContainerVolume">
        <input // VolumeBar
          type="range"
          min="0"
          max="100"
          value={props.mute ? 0 : props.volume * 100}
          className="volumeBar"
          defaultValue="50"
          onChange={props.handleUpdateSound}
        />
      </div>
      <Time
        currentTime={props.currentTime}
        videoDuration={props.videoDuration}
      />
      <i // FullScreen Icon
        className="fas fa-desktop"
        onClick={props.handleChangeFullScreen}
      />
    </div>
  );
}
