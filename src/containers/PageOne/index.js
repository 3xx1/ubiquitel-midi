import { connect } from 'react-redux';

import PageOne from './template';
import * as PageOneActions from './redux/actions';

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
  onIncrement: () => socketClientService.dispatchGlobal(PageOneActions.increment()),
  onDecrement: () => socketClientService.dispatchGlobal(PageOneActions.decrement()),
  onRefresh: () => socketClientService.refreshSystem()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageOne);
