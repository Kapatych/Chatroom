import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.scss';

import InfoBar from "../InfoBar/InfoBar";
import SendForm from "../SendForm/SendForm";

let socket;

const Chat = ({location}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const {name, room} = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', {name, room}, () => {});

    // Unmounting
    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [ENDPOINT, location.search]);

  useEffect( () => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  console.log(message, messages);

  return (
    <div className='chat'>
      <div className='chat__container'>
        <InfoBar room={room} />
        <SendForm message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  )
};

export default Chat;