import React from 'react';

import './SendForm.scss';

const SendForm = ({ message, setMessage, sendMessage }) => {

  return (
    <form className='send-form'>
      <textarea className='send-form__field'
             placeholder='Type a message...'
             value={message}
             onChange={event => setMessage(event.target.value)}
             onKeyPress={event => (!event.shiftKey && event.key === 'Enter') ? sendMessage(event) : null}
      />
      <button className='send-form__button' type='submit' onClick={event => sendMessage(event)}>
        <span className='hidden'>Send</span>
      </button>
    </form>
  )
};

//(!event.shiftKey && event.key === 'Enter')
//
export default SendForm;