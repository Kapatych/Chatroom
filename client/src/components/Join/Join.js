import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './Join.scss';

const Join = ({joinHandler, existRoom, error}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const submitHandler = event => {
    event.preventDefault();

    if (name && (existRoom || room)) {
      joinHandler(name, existRoom || room);
      setName('');
      setRoom('');
    }
  };

  const validateName = (name) => {
    const pattern = /^[a-zA-ZА-Яа-яЁё0-9\s_-]*$/;

    if (pattern.test(name)) {
      setName(name)
    }
  };

  return (
    <div className='join'>
      <div className='join__container'>
        <h1 className='heading'>Chat</h1>
        {
          existRoom &&
          <p className='greet'>Join to {existRoom}</p>
        }
        <form onSubmit={event => submitHandler(event)}>
          {
            error &&
            <p className='error'>{error}</p>
          }
          <input value={name}
                 className='join__input'
                 type='text'
                 placeholder='Name'
                 onChange={event => validateName(event.target.value)}/>
          {
            (!existRoom) &&
            <input value={room}
                   className='join__input'
                   type='text'
                   placeholder='Room'
                   onChange={event => setRoom(event.target.value)}/>
          }
          <button className='button join__button' type='submit'>Sign In</button>
        </form>
      </div>
    </div>
  )
};

Join.propTypes = {
  existRoom: PropTypes.string,
  error: PropTypes.string,
  joinHandler: PropTypes.func
};

export default Join;