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

    </form>
  )
};

//(!event.shiftKey && event.key === 'Enter')
//<button className='send-form__button' onClick={event => sendMessage(event)}>Send</button>
export default SendForm;