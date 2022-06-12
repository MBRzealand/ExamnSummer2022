import {io, Socket} from 'socket.io-client';
import {
  requestConnection,
  confirmConnection,
  disconnect,
  reconnect,
  connectionFailed,
} from './features/connectionSlice';
import {Middleware} from '@reduxjs/toolkit';
import {receiveMessage, sendMessage} from './features/messageSlice';

let connectionOptions = {
  withCredentials: true,
  'force new connection': true,
  reconnectionAttempts: 'Infinity',
  timeout: 10000,
  transports: ['websocket'],
};

const socketMiddleware: Middleware = store => {
  let socket = Socket;
  return next => {
    return action => {
      if (requestConnection.match(action)) {
        socket = io.connect('ws://192.168.128.134:8080/', connectionOptions);

        socket.on('connect', () => {
          store.dispatch(confirmConnection(socket.id));
        });

        socket.on('disconnect', () => {
          store.dispatch(disconnect());
        });

        socket.on('reconnecting', () => {
          store.dispatch(reconnect());
        });

        socket.on('message', message => {
          store.dispatch(sendMessage(message));
        });

        socket.on('receive', message => {
          store.dispatch(receiveMessage(message));
        });

        setTimeout(() => {
          if (!socket.connected) {
            store.dispatch(connectionFailed());
          }
        }, 5000);
      }

      if (sendMessage.match(action)) {
        socket.emit('message', action.payload);
      }
      next(action);
    };
  };
};

export default socketMiddleware;
