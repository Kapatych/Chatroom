import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from "./Message/Message";

import './Messages.scss';


const Messages = ({ messages, name }) => {

  return (
    <ScrollToBottom className='messages'>
      {
        messages.map((message, idx) => <Message key={idx} message={message} name={name}/>)
      }
    </ScrollToBottom>
  )
};

export default Messages;