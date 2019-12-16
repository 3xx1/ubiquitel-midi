import { connect } from 'react-redux';

import PageTwo from './template';
import * as PageTwoActions from './redux/actions';

// Socket Service Layer
import SocketClientService from '../../services/socket-client.service';
const socketClientService = new SocketClientService();

const mapStateToProps = (state) => {
  return {
    value1: state.get('pageOne').get('value'),
    value2: state.get('pageTwo').get('value')
  }
};

const mapDispatchToProps = (dispatch) => ({
  onUpdateValue: (event) => {
    socketClientService.dispatchGlobal(PageTwoActions.updateValue( parseInt(event.target.value) ));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTwo);
