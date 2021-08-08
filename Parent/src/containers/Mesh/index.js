import { connect } from 'react-redux';

import * as DAWControlActions from '../../redux/DAWControl/actions';
import * as FingerControlActions from '../../redux/FingerControl/actions';
import Mesh from './template';

import { generateFingerSignal } from '../../helpers/generateSignal';

import SocketClientService from '../../services/socket-client.service';
const socketClientService = new SocketClientService({ type: 'parent' });

const mapStateToProps = (state) => {
  return {
    activeSessions: state.DAWControl.activeSessions,
    isPlaying: state.DAWControl.isPlaying,
    currentTime: state.DAWControl.currentTime,
    lastTappedId: state.FingerControl.lastTappedId
  }
};

const mapDispatchToProps = (dispatch) => ({
  onPlayClicked: ({ fingerData, currentTime, isPlaying }) => {
    if (!isPlaying) {
      socketClientService.dispatchGlobal(DAWControlActions.dawControl__play());
      // socketClientService.dispatchGlobal(FingerControlActions.fingerControl__send(fingerData));

      // temp play event
      // socketClientService.sendDawEvent({
      //   eventType: 'DAW__PLAY'
      // });

      // fingerData.map(datum => {
      //   socketClientService.sendFingerEvent({
      //     eventType: 'FINGER__SIGNAL',
      //     buffer: {
      //       name: datum.name,
      //       signal: generateFingerSignal(datum.data, currentTime)
      //     }
      //   })
      // });
    }
  },

  onPauseBackwardClicked: ({ isPlaying }) => {
    if (isPlaying) {
      // dispatch(DAWControlActions.dawControl__pause());
      socketClientService.dispatchGlobal(DAWControlActions.dawControl__pause());
      // temp pause event
      // socketClientService.sendDawEvent({
      //   eventType: 'DAW__PAUSE'
      // });
    } else {
      // dispatch(DAWControlActions.dawControl__backward());
      socketClientService.dispatchGlobal(DAWControlActions.dawControl__backward());
      
      // temp pause event
      // socketClientService.sendDawEvent({
      //   eventType: 'DAW__BACKWARD'
      // });
    }
  },
  
  // Mute State
  updateMuteState(obj) {
    const { id, flag } = obj;
    if (id) {
      socketClientService.dispatchGlobal(DAWControlActions.dawControl__setActiveSessionIsMute({ id, flag }));
    }
  },

  updateSoloState(obj) {
    const { id, flag } = obj;
    if (id) {
      socketClientService.dispatchGlobal(DAWControlActions.dawControl__setActiveSessionIsSolo({ id, flag }));
    }
  },

  // Tap Finger
  tapFinger: (id) => {
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