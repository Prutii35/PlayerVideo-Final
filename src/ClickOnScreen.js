/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import pause from './pauseButton.png';
import play from './playButton.png';

export default function ClickOnScren(props) {
  return (
    <div className={props.fullScreenCheck ? 'Container-Click-FullScreen' : 'Container-Click'} onClick={props.handleChangePlaying}>
      <div className="MsgOnScreen">
        <img src={play} className="imgOnScreen" alt="PlayOnScreen" />
      </div>
      <div className="MsgOnScreen">
        <img src={pause} className="imgOnScreen" alt="PauseOnScreen" />
      </div>
    </div>
  );
}
