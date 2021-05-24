import { connect } from 'react-redux';

import * as DAWControlActions from '../../redux/DAWControl/actions';
import * as FingerControlActions from '../../redux/FingerControl/actions';
import Mesh from './template';

import SocketClientService from '../../services/socket-client.service';
const socketClientService = new SocketClientService({ type: 'parent' });

const mapStateToProps = (state) => {
  return {
    activeSessions: state.DAWControl.activeSessions,
    lastTappedId: state.FingerControl.lastTappedId
  }
};

const mapDispatchToProps = (dispatch) => ({
  tapFinger: (id) => {
    console.log('mesh event run')
    socketClientService.dispatchGlobal(FingerControlActions.fingerControl__tap(id));
  },
  clearLastTappedId: () => {
    socketClientService.dispatchGlobal(FingerControlActions.fingerControl__tap_clear());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mesh);