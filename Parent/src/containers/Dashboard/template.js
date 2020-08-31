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
  componentDidMount() {
  }

  render() {
    return (
      <div className="container__dashboard">
        {/* Temp Buttons for debugging */}
        <button className="__DEBUG" onClick={() => this.props.onDebugClicked()}>debug</button>

        <Control
          onPlayPauseClicked={() => this.props.onPlayPauseClicked(this.props.isPlaying, fingerData, this.props.currentTime)}
          onBackwardClicked={() => this.props.onBackwardClicked()}
        />
        <Waveform 
          label={'Wave 1'} 
          isPlaying={this.props.isPlaying}
          onAudioLoaded={(data) => this.props.setAudioData(data)}
          onWaveScrolled={(data) => this.props.setTimelineScroll(data)}
          onWaveInteracted={(time) => this.props.setTimelineScroll(time)}
        />
        {fingerData.map((finger) => {
          return (
            <Finger label={finger.name} data={finger.data} offsetLeft={this.props.offsetLeft} />
          );
        })}
      </div>
    );
  }
}

// Class Prop
Dashboard.propTypes = {
};