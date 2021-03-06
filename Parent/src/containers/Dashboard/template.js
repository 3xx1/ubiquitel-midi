// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Control from '../../components/Control';
import Waveform from '../../components/Waveform';
import Finger from '../../components/Finger';

// Data
import fingerData from '../../assets/finger-data';

// Styles
import './style.scss';

// Class
export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this._waveform = React.createRef();
  }

  handleMuteClick(fingerId) {
    this.props.handleMuteClick({ fingerId, isMute: this.props.mute.find(c => c === fingerId) ? false : true });
  }

  handleSoloClick(fingerId) {
    this.props.handleSoloClick({ fingerId, isSolo: this.props.solo.find(c => c === fingerId) ? false : true });
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container__dashboard">
        {/* Temp Buttons for debugging */}
        {/* <button className="__DEBUG" onClick={() => this.props.onDebugClicked()}>debug</button> */}

        <h1>8Vgw.</h1>
        <Control
          onPlayClicked={() => this.props.onPlayClicked(fingerData, this.props.currentTime)}
          onPauseBackwardClicked={() => this.props.onPauseBackwardClicked(this.props.isPlaying, fingerData, this._waveform)}
          onRecording={() => console.log('recording!')}
          isPlaying={this.props.isPlaying}
        />
        <Waveform
          ref={this._waveform}
          label={'Wave 1'} 
          isPlaying={this.props.isPlaying}
          onAudioLoaded={(data) => this.props.setAudioData(data)}
          onWaveScrolled={(data) => this.props.setTimelineScroll(data)}
          onWaveInteracted={(time) => this.props.setTimelineScroll(time)}
        />
        {fingerData.map((finger, index) => {
          return (
            <Finger
              fingerId={`finger--${index}`}
              label={finger.name}
              data={finger.data}
              isSolo={this.props.solo.find(s => s === `finger--${index}`)}
              isMute={this.props.mute.find(m => m === `finger--${index}`) || (this.props.solo.length > 0 && !this.props.solo.find(s => s === `finger--${index}`))}
              offsetLeft={this.props.offsetLeft}
              handleSoloClick={(fingerId) => { this.handleSoloClick(fingerId) }}
              handleMuteClick={(fingerId) => { this.handleMuteClick(fingerId) }}
            />
          );
        })}
      </div>
    );
  }
}

// Class Prop
Dashboard.propTypes = {
};