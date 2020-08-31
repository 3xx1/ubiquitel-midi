import { connect } from 'react-redux';

import * as DAWControlActions from '../../redux/DAWControl/actions';
import * as FingerControlActions from '../../redux/FingerControl/actions';
import Dashboard from './template';

import { generateFingerSignal } from '../../helpers/generateSignal';

import SocketClientService from '../../services/socket-client.service';
const socketClientService = new SocketClientService();

const mapStateToProps = (state) => {
  return {
    isPlaying: state.DAWControl.isPlaying,
    currentTime: state.DAWControl.currentTime,
    offsetLeft: state.DAWControl.currentScrollLeft
  }
};

const mapDispatchToProps = (dispatch) => ({
  onPlayPauseClicked: (isPlaying, data, offset) => {
    if (isPlaying) {
      dispatch(DAWControlActions.dawControl__pause());
      
      // temp pause event
      socketClientService.sendDawEvent({
        eventType: 'DAW__PAUSE'
      });

    } else {
      dispatch(DAWControlActions.dawControl__play());
      socketClientService.dispatchGlobal(FingerControlActions.fingerControl__send(data));

      // temp play event
      socketClientService.sendDawEvent({
        eventType: 'DAW__PLAY'
      });

      data.map(datum => {
        socketClientService.sendFingerEvent({
          eventType: 'FINGER__SIGNAL',
          buffer: {
            name: datum.name,
            signal: generateFingerSignal(datum.data, offset)
          }
        })
      });
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
  setTimelineScroll: (data) => {
    dispatch(DAWControlActions.dawControl__setCurrentTime(data.currentTime || 0));
    dispatch(DAWControlActions.dawControl__setCurrentScrollLeft(data.scrollLeft || 0));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);