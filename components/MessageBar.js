import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {changeCurrentMessage, sendMessage} from '../features/messageSlice';

const windowHeight = Dimensions.get('window').height;

const containerHeight = windowHeight * 0.06;

const MessageBar = () => {
  const messageState = useSelector(state => state.message);
  const connectionState = useSelector(state => state.connection);
  const dispatch = useDispatch();
  const handleChange = text => {
    dispatch(changeCurrentMessage(text));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    seconds = seconds <= 9 ? '0' + seconds : seconds;
    minutes = minutes <= 9 ? '0' + minutes : minutes;
    hours = hours <= 9 ? '0' + hours : hours;

    const messageObject = {
      sender: messageState.username,
      text: messageState.currentMessage,
      time: hours + ':' + minutes + ':' + seconds,
      id: messageState.username + date.getTime(),
    };

    dispatch(sendMessage(messageObject));
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0.7, y: 0}}
      colors={['#4a395d', '#324874']}
      style={styles.container}>
      <TextInput
        value={messageState.currentMessage}
        onChangeText={handleChange}
        selectionColor={'#4a395d'}
        style={styles.messageInput}
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
        <Image style={styles.sendImage} source={require('./send_icon.png')} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageInput: {
    width: '75%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: '5%',
    color: '#000',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '5%',
  },
  sendImage: {
    height: 30,
    width: 30,
  },
});

export default MessageBar;
