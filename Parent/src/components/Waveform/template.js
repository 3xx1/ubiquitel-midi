import React from 'react';
import WaveSurfer from 'wavesurfer.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js';
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
      plugins: [
        TimelinePlugin.create({
          container: '#waveform-timeline'
        })
      ]
    });
    this.waveform.load(url);
    this.waveform.zoom(100);
    this.waveform.on('ready', () => {
      this.props.onAudioLoaded({
        duration: this.waveform.getDuration(),
        zoom: 100
      });
    });
    this.waveform.on('scroll', (event) => {
      this.props.onWaveScrolled({
        scrollLeft: event.target.scrollLeft,
        currentTime: this.waveform.getCurrentTime()
      });
    });
    this.waveform.on('interaction', (event) => {
      this.props.onWaveInteracted({
        currentTime: this.waveform.getCurrentTime()
      })
    });
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
          <div id="waveform-timeline" />
        </div>
      </div>
    );
  }
}

Waveform.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onAudioLoaded: PropTypes.func
}
