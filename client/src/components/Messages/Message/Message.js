import React from 'react';

import './Message.scss';

const Message = ({ message: {user, text}, name }) => {
  let isCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) isCurrentUser = true;

  return (
    isCurrentUser
    ? (
        <div className="messages__item messages__item--own">
          <p className="messages__item-author">{trimmedName}</p>
          <p className="messages__item-text">{text}</p>
        </div>
      )
    : (
        <div className="messages__item">
          <p className="messages__item-text">{text}</p>
          <p className="messages__item-author">{user}</p>
        </div>
      )
  )
};

export default Message;