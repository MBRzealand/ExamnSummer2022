import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  id: '',
  connecting: false,
  connected: false,
};

const connectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {
    requestConnection: state => {
      state.connecting = true;
    },
    reconnect: state => {
      state.connecting = true;
    },
    confirmConnection: (state, action) => {
      state.connected = true;
      state.connecting = false;
      state.id = action.payload;
    },
    connectionFailed: state => {
      state.connecting = false;
    },
    disconnect: state => {
      state.connected = false;
      state.connecting = false;
    },
  },
});

export const {
  requestConnection,
  confirmConnection,
  disconnect,
  reconnect,
  connectionFailed,
} = connectionSlice.actions;
export default connectionSlice.reducer;





