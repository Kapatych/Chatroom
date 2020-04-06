import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';
import PropTypes from 'prop-types';

import './App.scss';

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const ENDPOINT = 'localhost:5000';
const socket = io.connect(ENDPOINT);

function App({ location, history }) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [tempName, setTempName] = useState('');

  useEffect(() => {
    // Check if url contains a room
    const room = queryString.parse(location.search).room || '';

    // Check if localStorage contains a name
    const name = tempName || localStorage.getItem('name');

    setRoom(room);
    setName(name);
  }, [location.search, tempName]);

  useEffect( () => {
    if (name && room) {
      socket.emit('join', { name, room }, (error) => {
        if (error) {
          setError(error);
          setTempName('');
        } else {
          // If success save name in local storage
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
      ? <Chat name={ name } room={ room } socket={ socket } />
      : <Join existRoom={ room } joinHandler={ joinHandler } error={ error }/>
  )
}

App.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object
};

export default App;
