/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function ProgressBar(props) {
  return (
    <input
      type="range"
      min="0"
      max={props.videoDuration}
      defaultValue="0"
      value={props.currentTime}
      className="bar"
      onChange={props.handleUpdateProgressBar}
    />
  )
}