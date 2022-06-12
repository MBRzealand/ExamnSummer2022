import React, {useRef} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import SentMessage from './SentMessage';
import ReceivedMessage from './ReceivedMessage';

const MessageList = props => {
  const scrollViewRef = useRef();

  const messageState = useSelector(state => state.message);
  const connectionState = useSelector(state => state.connection);

  const messages = messageState.messages.map(message =>
    message.sender === messageState.username ? (
      <SentMessage key={message.id} time={message.time} text={message.text} />
    ) : (
      <ReceivedMessage
        key={message.id}
        time={message.time}
        text={message.text}
      />
    ),
  );
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({animated: true})
      }
      style={styles.container}>
      {messages}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#423539',
    paddingHorizontal: '5%',
  },
  redText: {
    fontSize: 100,
    color: 'red',
  },
});

export default MessageList;





