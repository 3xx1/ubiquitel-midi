// Dependencies
import * as io from 'socket.io-client';

// Others
import { store } from '../index.js';
import { environment } from '../environment';

import * as DawControlActions from '../redux/DAWControl/actions';
import {
  DAW_CONTROL__PLAY,
  DAW_CONTROL__PAUSE,
  DAW_CONTROL__SET_ACTION_SESSION__IS_MUTE_STATE,
  DAW_CONTROL__SET_ACTION_SESSION__IS_SOLO_STATE
} from '../redux/DAWControl/constants';

export default class SocketClientService {
  constructor(option) {
    const self = this;
    if (option && option.type) self.type = option.type;
    self.url = process.env.NODE_ENV === 'production'
            ? `http://${window.document.location.hostname}:${environment.production.socketPort}/`
            : `http://${window.document.location.hostname}:${environment.development.socketPort}/`;
    self.socket = io( self.url, { query: { type: self.type || 'child' } } );

    self.socket.on('action.dispatch', (action) => {
      store.dispatch(action);
    });

    self.socket.on('refresh', () => {
      document.location.reload(true);
    });

    self.socket.on('sessions', (sessions) => {
      this.dispatchGlobal(DawControlActions.dawControl__setActiveSessions(sessions));
    })
  }

  dispatchGlobal(action) {
    store.dispatch(action);
    this.dispatchRemoteAction(action);

    if (
      action.type === DAW_CONTROL__PLAY ||
      action.type === DAW_CONTROL__PAUSE ||
      action.type === DAW_CONTROL__SET_ACTION_SESSION__IS_MUTE_STATE ||
      action.type === DAW_CONTROL__SET_ACTION_SESSION__IS_SOLO_STATE
    ) {
      this.createEvent(action.type);
    }
  }

  dispatchRemoteAction(action) {
    this.socket.emit('action.dispatch', action);
  }

  createEvent(actionType) {
    const sessionIds = store.getState().DAWControl.activeSessions.filter((session) => { return session.type === 'child' }).map((session) => { return session.id });
    const muteIds = store.getState().DAWControl.activeSessions.filter((session) => { return session.isMute }).map((session) => { return session.id });
    const soloIds = store.getState().DAWControl.activeSessions.filter((session) => { return session.isSolo }).map((session) => { return session.id });
    let mutedArray = [];

    switch (actionType) {
      case DAW_CONTROL__PLAY:
        this.sendDawEvent({
          eventType: 'DAW__PLAY'
        });
        break;
      
      case DAW_CONTROL__PAUSE:
        this.sendDawEvent({
          eventType: 'DAW__PAUSE'
        });
        break;
      
      case DAW_CONTROL__SET_ACTION_SESSION__IS_MUTE_STATE:
        if (soloIds.length === 0) {
          mutedArray = muteIds;
        } else {
          mutedArray = [
            ...sessionIds.filter((sessionId) => { return !soloIds.find((soloId) => { return soloId === sessionId }); }),
            ...muteIds
          ]
          mutedArray = mutedArray.filter((id, index) => { return mutedArray.indexOf(id) === index });
        }

        this.sendDawEvent({
          eventType: 'DAW__MUTE_STATE_UPDATE',
          buffer: mutedArray
        });
        break;

      case DAW_CONTROL__SET_ACTION_SESSION__IS_SOLO_STATE:
        if (soloIds.length === 0) {
          mutedArray = muteIds;
        } else {
          mutedArray = [
            ...sessionIds.filter((sessionId) => { return !soloIds.find((soloId) => { return soloId === sessionId }); }),
            ...muteIds
          ]
          mutedArray = mutedArray.filter((id, index) => { return mutedArray.indexOf(id) === index });
        }

        this.sendDawEvent({
          eventType: 'DAW__MUTE_STATE_UPDATE',
          buffer: mutedArray
        });
        break;
    }
  }

  sendDawEvent(blob) {
    this.socket.emit('buffer.daw.send.broadcast', blob);
    console.log(blob, 'daw');
  }

  sendFingerEvent(blob) {
    this.socket.emit('buffer.daw.send.broadcast', blob);
    console.log(blob, 'finger');
  }

  refreshSystem() {
    this.socket.emit('refresh', true);
  }
}
