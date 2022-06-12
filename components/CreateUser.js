import React from 'react';
import {
  Dimensions,
  Image, ImageBackground,
  StyleSheet, Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import {changeCurrentUsername, setUsername} from '../features/messageSlice';

const CreateUser = () => {
  const messageState = useSelector(state => state.message);
  const dispatch = useDispatch();

  const handleChange = text => {
    dispatch(changeCurrentUsername(text));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(setUsername(messageState.currentUsername));
  };

  return (
    <ImageBackground
      source={require('./background.png')}
      style={styles.container}>
      <Text style={styles.titleText}>Choose Username</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={messageState.currentUsername}
          onChangeText={handleChange}
          selectionColor={'#6564db'}
          style={styles.messageInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
          <Image style={styles.sendImage} source={require('./login_icon.png')} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '70%',
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
    height: 40,
    width: 40,
  },
  titleText: {
    marginTop: '40%',
    color: '#fff',
    fontSize: 50,
  },
});

export default CreateUser;
