import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js'
import PropTypes from 'prop-types'
import { WaveformContainer, Wave } from './style'

const url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3'

class Waveform extends Component {
  state = {
    playing: false,
  };

  componentDidMount() {
    this.waveform = WaveSurfer.create({
      container: '#waveform',
    });
    this.waveform.load(url);
    this.waveform.zoom(100);
  };

  componentDidUpdate() {
    if (this.props.audioState === 'PLAY') {
      this.waveform.play();
    } else if (this.props.audioState === 'PAUSE') {
      this.waveform.pause();
    } else if (this.props.audioState === 'BACKWARD') {
      this.waveform.stop();
    }
  }

  render() {
    return (
      <WaveformContainer>
        <Wave id="waveform" />
      </WaveformContainer>
    );
  }
};

Waveform.propTypes = {
  audioState: PropTypes.string,
}

export default Waveform;