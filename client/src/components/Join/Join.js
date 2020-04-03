import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Join.scss';


const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className='join'>
      <div className='join__container'>
        <h1 className='heading'>Join</h1>
        <input value={name}
               className='join__input'
               type='text'
               placeholder='Name'
               onChange={event => setName(event.target.value)}/>
        <input value={room}
               className='join__input'
               type='text'
               placeholder='Room'
               onChange={event => setRoom(event.target.value)}/>
        <Link to={`/chat?name=${name.trim()}&room=${room.trim()}`}
              onClick={event => (!name || !room) ? event.preventDefault() : null}>
          <button className='button join__button' type='submit'>Sign In</button>
        </Link>
      </div>
    </div>
  )
};

export default Join;