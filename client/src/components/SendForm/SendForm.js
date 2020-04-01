import React from 'react';

import './SendForm.scss';

const SendForm = ({ message, setMessage, sendMessage }) => {
  return (
    <form className='send-form'>
      <input className='send-form__input'
             type='text'
             placeholder='Type a message...'
             value={message}
             onChange={event => setMessage(event.target.value)}
             onKeyPress={event => (event.key === 'Enter') ? sendMessage(event) : null}
      />
      <button className='send-form__button' onClick={event => sendMessage(event)}>Send</button>
    </form>
  )
};

export default SendForm;