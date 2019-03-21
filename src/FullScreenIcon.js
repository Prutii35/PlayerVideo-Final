/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class FullScreenIcon extends Component {
  render() {
    return (
      <i className="fas fa-desktop" style={{ position: 'absolute', top: '33%', right: '3%' }} onClick={this.props.handleChangeFullScreen} />
    );
  }
}

export default FullScreenIcon;
