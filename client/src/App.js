import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';

import './App.scss';

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const ENDPOINT = 'localhost:5000';
const socket = io.connect(ENDPOINT);

function App({location, history}) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [tempName, setTempName] = useState('');

  useEffect(() => {
    const room = queryString.parse(location.search).room || '';
    const name = tempName || localStorage.getItem('name');
    setRoom(room);
    setName(name);
  }, [location.search, tempName]);

  useEffect( () => {
    if (name && room) {
      socket.emit('join', { name, room }, (error) => {
        if (error) {
          setError(error);
          //localStorage.removeItem('name');
          setTempName('');
        } else {
          localStorage.setItem('name', name);
          setIsLogin(true)
        }
      });
    }
  }, [name, room]);

  const joinHandler = (name, room) => {
    history.push(`/?room=${room.trim()}`);
    setTempName(name);
  };

  return (
    (isLogin)
      ? (
        <Chat name={name} room={room} socket={socket} />
      )
      : (
        <Join existRoom={room} joinHandler={joinHandler} error={error}/>
      )
  )
}

export default App;
