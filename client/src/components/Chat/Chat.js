import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.scss';

import InfoBar from "../InfoBar/InfoBar";
import Messages from "../Messages/Messages";
import SendForm from "../SendForm/SendForm";
import People from "../People/People";

let socket;

const Chat = ({location, history}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const {name, room} = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', {name, room}, (error) => {
      if (error) {
        alert(error);
        history.push('/')
      }
    });

    // Unmounting
    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages(messages => [...messages, message]);
    });

    socket.on('roomData', ({users}) => {
      setUsers(users);
    });

  }, []);

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