import { connect } from 'react-redux';

import * as DAWControlActions from '../../redux/DAWControl/actions';
import * as FingerControlActions from '../../redux/FingerControl/actions';
import FingerMock from './template';

import SocketClientService from '../../services/socket-client.service';

const socketClientService = new SocketClientService();

const mapStateToProps = (state) => {
  return {
    
  }
};

const mapDispatchToProps = (dispatch) => ({
  tapFinger: () => {
    const id = socketClientService.socket.id;
    if (id)
      socketClientService.dispatchGlobal(FingerControlActions.fingerControl__tap(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FingerMock);