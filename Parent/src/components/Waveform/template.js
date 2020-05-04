import React from 'react';
import WaveSurfer from 'wavesurfer.js';
import PropTypes from 'prop-types';
import './style.scss';

const url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3'

// Class
export default class Waveform extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.waveform = WaveSurfer.create({
      container: '#waveform',
    });
    this.waveform.load(url);
    this.waveform.zoom(100);
  }

  componentDidUpdate() {
    this.props.isPlaying
    ? this.waveform.play()
    : this.waveform.pause();
    // this.waveform.stop();
  }

  render() {
    return (
      <div className="waveform--component">
        <div className="header">
          <p>{this.props.label}</p>
        </div>
        <div className="body">
          <div id="waveform" />
        </div>
      </div>
    );
  }
}

Waveform.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
}
