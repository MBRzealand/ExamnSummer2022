import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import socketMiddleware from './socketMiddleware';
import connectionReducer from './features/connectionSlice';
import messageReducer from './features/messageSlice';

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger, socketMiddleware),
  reducer: {
    connection: connectionReducer,
    message: messageReducer,
  },
});

export default store;






