import React, {useState} from 'react';
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

  return (
    <div className='join'>
      <div className='join__container'>
        <h1 className='heading'>Chat</h1>
        {
          existRoom ? <p>Join to {existRoom}</p> : null
        }
        <form onSubmit={event => submitHandler(event)}>
          {
            error ? <p className='error'>{error}</p> : null
          }
          <input value={name}
                 className='join__input'
                 type='text'
                 placeholder='Name'
                 onChange={event => setName(event.target.value)}/>
          {
            (!existRoom)
              ? (
                <input value={room}
                       className='join__input'
                       type='text'
                       placeholder='Room'
                       onChange={event => setRoom(event.target.value)}/>
              )
              : null
          }
          <button className='button join__button' type='submit'>Sign In</button>
        </form>
      </div>
    </div>
  )
};

export default Join;