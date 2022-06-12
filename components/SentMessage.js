import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SentMessage = props => {
  return (
    <View>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{props.text}</Text>
      </View>
      <Text style={styles.textTime}>Sent at {props.time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    backgroundColor: '#324874',
    borderRadius: 25,
  },
  messageText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    color: 'white',
  },
  textTime: {
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 12,
    color: 'grey',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
  },
});
export default SentMessage;
