import React from 'react';
import ReactEmoji from 'react-emoji';

import './Message.scss';

const Message = ({message: {user, text, time}, name}) => {
  let isCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user.toLowerCase() === trimmedName) isCurrentUser = true;

  return (
    isCurrentUser
      ? (
        <div className="messages__item messages__item--own">
          <p className="messages__item-time">{time}</p>
          <div className="messages__item-box">
            <p className="messages__item-text">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      )
      : (user === 'admin')
      ? (
        <div className="messages__item messages__item--admin">
          <p className="messages__item-text">{text}</p>
        </div>
      )
      : (
        <div className="messages__item">
          <div className="messages__item-box">
            <p className="messages__item-author">{user}</p>
            <p className="messages__item-text">{ReactEmoji.emojify(text)}</p>
          </div>
          <p className="messages__item-time">{time}</p>
        </div>
      )
  )
};

export default Message;