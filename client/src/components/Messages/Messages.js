import React, {useEffect, useRef} from 'react';

import Message from "./Message/Message";

import './Messages.scss';


const Messages = ({ messages, name }) => {
  const messagesEnd = useRef(null);

  const scrollToBottom = () => {
    if (!messagesEnd) {
      return;
    }
    messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  });

  return (
    <div className='messages'>
      {
        messages.map((message, idx) => <Message key={idx} message={message} name={name}/>)
      }
      <div ref={messagesEnd} />
    </div>
  )
};

export default Messages;