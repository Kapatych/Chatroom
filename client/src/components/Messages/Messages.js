import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import './Messages.scss';

import Message from "./Message/Message";

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

Messages.propTypes = {
  name: PropTypes.string,
  messages: PropTypes.array
};

export default Messages;