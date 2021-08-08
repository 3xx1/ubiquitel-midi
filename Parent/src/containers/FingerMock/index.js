import { connect } from 'react-redux';

import * as DAWControlActions from '../../redux/DAWControl/actions';
import * as FingerControlActions from '../../redux/FingerControl/actions';
import FingerMock from './template';

import SocketClientService from '../../services/socket-client.service';

const socketClientService = new SocketClientService();

const mapStateToProps = (state) => {
  return {
    id: socketClientService.socket.id,
    lastTappedId: state.FingerControl.lastTappedId,
    activeSessions: state.DAWControl.activeSessions,
    isPlaying: state.DAWControl.isPlaying
  }
};

const mapDispatchToProps = (dispatch) => ({
  tapFinger: () => {
    console.log('mock event run')
    const id = socketClientService.socket.id;
    if (id)
      socketClientService.dispatchGlobal(FingerControlActions.fingerControl__tap(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FingerMock);