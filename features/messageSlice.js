import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentUsername: '',
  username: '',
  currentMessage: '',
  messages: [],
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    changeCurrentUsername: (state, action) => {
      state.currentUsername = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
      state.currentUsername = '';
    },
    changeCurrentMessage: (state, action) => {
      state.currentMessage = action.payload;
    },
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
      state.currentMessage = '';
    },
    receiveMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const {
  changeCurrentUsername,
  setUsername,
  changeCurrentMessage,
  sendMessage,
  receiveMessage,
} = messageSlice.actions;
export default messageSlice.reducer;
