import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  confirmConnection,
  disconnect,
  reconnect,
  requestConnection,
  connectionFailed,
} from './features/connectionSlice';
import bindActionCreators from 'react-redux/es/utils/bindActionCreators';
import {useDispatch, connect, useSelector} from 'react-redux';
import MessageList from './components/MessageList';
import MessageBar from './components/MessageBar';
import {changeCurrentMessage, sendMessage} from './features/messageSlice';
import CreateUser from './components/CreateUser';

const App = () => {
  const dispatch = useDispatch();
  const messageState = useSelector(state => state.message);

  useEffect(() => {
    dispatch(requestConnection());
  }, []);

  return messageState.username !== '' ? (
    <View style={styles.innerContainer}>
      <MessageList />
      <MessageBar />
    </View>
  ) : (
    <View style={styles.innerContainer}>
      <CreateUser />
    </View>
  );
};

// const mapStateToProps = state => ({
//   connecting: state.connecting,
//   connected: state.connected,
//   messages: state.messages,
//   currentMessage: state.currentMessage,
//   sentMessages: state.sentMessages,
//   receivedMessages: state.receivedMessages,
//   sortedMessages: state.sortedMessages,
// });
//
// const ActionCreators = Object.assign(
//   {},
//   sendMessage,
//   changeCurrentMessage,
//   requestConnection,
//   confirmConnection,
//   disconnect,
//   reconnect,
//   connectionFailed,
// );
// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(ActionCreators, dispatch),
// });

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
