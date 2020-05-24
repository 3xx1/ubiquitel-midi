import { connect } from 'react-redux';

import * as DAWControlActions from '../../redux/DAWControl/actions';
import * as FingerControlActions from '../../redux/FingerControl/actions';
import Dashboard from './template';

import SocketClientService from '../../services/socket-client.service';
const socketClientService = new SocketClientService();

const mapStateToProps = (state) => {
  return {
    isPlaying: state.DAWControl.isPlaying
  }
};

const mapDispatchToProps = (dispatch) => ({
  onPlayPauseClicked: (isPlaying, data) => {
    if (isPlaying) {
      dispatch(DAWControlActions.dawControl__pause());
    } else {
      dispatch(DAWControlActions.dawControl__play());
      socketClientService.dispatchGlobal(FingerControlActions.fingerControl__send(data));
    }
  },
  onBackwardClicked: () => {
  },
  onDebugClicked: () => {
    socketClientService.dispatchGlobal(FingerControlActions.fingerControl__send(1234, 128));
  },
  setAudioData: (data) => {
    dispatch(DAWControlActions.dawControl__setData(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);