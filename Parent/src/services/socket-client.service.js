// Dependencies
import * as io from 'socket.io-client';

// Others
import { store } from '../index.js';
import { environment } from '../environment';

import * as DawControlActions from '../redux/DAWControl/actions';

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
  }

  dispatchRemoteAction(action) {
    this.socket.emit('action.dispatch', action);
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
