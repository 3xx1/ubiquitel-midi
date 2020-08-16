// Dependencies
import * as io from 'socket.io-client';

// Others
import { store } from '../index.js';
import { environment } from '../environment';

export default class SocketClientService {
  constructor(type = 'children') {
    const self = this;
    self.url = process.env.NODE_ENV === 'production'
            ? `http://${window.document.location.hostname}:${environment.production.socketPort}/`
            : `http://${window.document.location.hostname}:${environment.development.socketPort}/`;
    self.socket = io( self.url );

    self.socket.on('action.dispatch', (action) => {
      store.dispatch(action);
    });

    self.socket.on('refresh', () => {
      document.location.reload(true);
    });
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
