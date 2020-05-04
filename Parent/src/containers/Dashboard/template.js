// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Control from '../../components/Control';
import Waveform from '../../components/Waveform';
import Finger from '../../components/Finger';

// Styles
import './style.scss';

// Class
export default class Dashboard extends React.PureComponent {
  componentDidMount() {
  }

  render() {
    return (
      <div className="container__dashboard">
        <Control
          onPlayPauseClicked={() => this.props.onPlayPauseClicked(this.props.isPlaying)}
          onBackwardClicked={() => this.props.onBackwardClicked()}
        />
        <Waveform 
          label={'Wave 1'} 
          isPlaying={this.props.isPlaying}
        />
        <Finger label={'Ub 1'} />
        <Finger label={'Ub 2'} />
        <Finger label={'Ub 3'} />
      </div>
    );
  }
}

// Class Prop
Dashboard.propTypes = {
};