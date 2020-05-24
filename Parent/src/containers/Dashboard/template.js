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
          onPlayPauseClicked={() => this.props.onPlayPauseClicked(this.props.isPlaying, fingerData)}
          onBackwardClicked={() => this.props.onBackwardClicked()}
        />
        <Waveform 
          label={'Wave 1'} 
          isPlaying={this.props.isPlaying}
          onAudioLoaded={(data) => this.props.setAudioData(data)}
        />
        <Finger label={'Ub 1'} data={fingerData.finger0} />
        <Finger label={'Ub 2'} data={fingerData.finger1} />
        <Finger label={'Ub 3'} data={fingerData.finger2} />
      </div>
    );
  }
}

// Class Prop
Dashboard.propTypes = {
};