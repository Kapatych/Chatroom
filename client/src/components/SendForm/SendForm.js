import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Picker from 'emoji-picker-react';

import './SendForm.scss';

const SendForm = ({ message, setMessage, sendMessage }) => {
  const [emoji, setEmoji] = useState(false);

  return (
    <form className='send-form'>
      {
        emoji &&
        <Picker onEmojiClick={ (event, emojiObject) => setMessage( (prev) => prev + emojiObject.emoji ) }/>
      }
      <button className='send-form__button-emoji' type='button' onClick={ () => setEmoji(!emoji) }>
        <span className='hidden'>Set emoji</span>
      </button>
      <textarea className='send-form__field'
             placeholder='Type a message...'
             value={ message }
             onChange={ event => setMessage(event.target.value )}
             onKeyPress={ event => (!event.shiftKey && event.key === 'Enter') && (sendMessage(event) || setEmoji(false)) }
      />
      <button className='send-form__button' type='submit' onClick={ event => {sendMessage(event); setEmoji(false)} }>
        <span className='hidden'>Send</span>
      </button>
    </form>
  )
};

SendForm.propTypes ={
  message: PropTypes.string,
  setMessage: PropTypes.func,
  sendMessage: PropTypes.func
};

export default SendForm;