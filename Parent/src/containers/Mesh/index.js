import { connect } from 'react-redux';

import * as DAWControlActions from '../../redux/DAWControl/actions';
import * as FingerControlActions from '../../redux/FingerControl/actions';
import Mesh from './template';

import SocketClientService from '../../services/socket-client.service';
const socketClientService = new SocketClientService({ type: 'parent' });

const mapStateToProps = (state) => {
  return {
    activeSessions: state.DAWControl.activeSessions
  }
};

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mesh);