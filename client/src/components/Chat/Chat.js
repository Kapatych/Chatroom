import React, {useState, useEffect, useRef} from 'react';
import PropTypes from "prop-types";

import './Chat.scss';

import InfoBar from "../InfoBar/InfoBar";
import Messages from "../Messages/Messages";
import SendForm from "../SendForm/SendForm";
import People from "../People/People";
import UserBar from "../UserBar/UserBar";
import Sidebar from "../Sidebar/Sidebar";

const Chat = ({ room, name, socket }) => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Subscribe to new messages
    socket.on('message', (message) => {
      setMessages(messages => [...messages, message]);
    });

    // Subscribe to change users in room
    socket.on('roomData', ({users}) => {
      setUsers(users);
    });

    // Unsubscribe
    return () => {
      socket.off('message');
      socket.off('roomData');
    }
  }, [socket]);

  const sendMessage = (event) => {
    event.preventDefault();

    // Clear message then Send a cleared message if it contains not only spaces and line breaks
    const clearedMessage = message.replace(/(\s)+/g, '$1').trim();
    if (clearedMessage) {
      socket.emit('sendMessage', clearedMessage, () => setMessage(''));
    }
  };

  // Burger menu, toggle active modifier
  const sidebar = useRef();
  const toggleSidebar = () => {
    sidebar.current.classList.toggle('sidebar--active')
  };

  return (
    <div className='chat'>
      <div className='chat__container'>
        <Sidebar reference={ sidebar } toggleSidebar={ toggleSidebar }>
            <People users={ users.filter(user => user.name !== name) }/>
            <UserBar user={ name }/>
        </Sidebar>
        <div className='main'>
          <InfoBar room={ room } usersCount={ users.length } toggleSidebar={ toggleSidebar }/>
          <Messages messages={ messages } name={ name }/>
          <SendForm message={ message } setMessage={ setMessage } sendMessage={ sendMessage }/>
        </div>
      </div>
    </div>
  )
};

Chat.propTypes = {
  name: PropTypes.string,
  room: PropTypes.string,
  socket: PropTypes.object
};

export default Chat;