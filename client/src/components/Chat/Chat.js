import React, {useState, useEffect} from 'react';

import './Chat.scss';

import InfoBar from "../InfoBar/InfoBar";
import Messages from "../Messages/Messages";
import SendForm from "../SendForm/SendForm";
import People from "../People/People";
import UserBar from "../UserBar/UserBar";

const Chat = ({room, name, socket}) => {

  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    socket.on('message', (message) => {
      setMessages(messages => [...messages, message]);
    });

    socket.on('roomData', ({users}) => {
      setUsers(users);
    });

    return () => {
      socket.off('message');
      socket.off('roomData');
    }

  }, [socket]);

  const sendMessage = (event) => {
    event.preventDefault();

    const clearedMessage = message.replace(/(\s)+/g,'$1').trim();

    // Send a cleared message if it contains not only spaces and line breaks
    if (clearedMessage) {
      socket.emit('sendMessage', clearedMessage, () => setMessage(''));
    }
  };

  return (
    <div className='chat'>
      <div className='chat__container'>
        <div className='sidebar'>
          <UserBar user={name} />
          <People users={users}/>
        </div>
        <div className='main'>
          <InfoBar room={room}/>
          <Messages messages={messages} name={name}/>
          <SendForm message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        </div>
      </div>

    </div>
  )
};

export default Chat;