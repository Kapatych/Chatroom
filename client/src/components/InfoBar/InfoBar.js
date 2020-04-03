import React from 'react';

import './InfoBar.scss';

const InfoBar = ({room}) => {
  return (
    <div className='info-bar'>
      <a className='info-bar__menu' href="/">
        <span/>
        <p className='hidden'>Menu</p>
      </a>
      <div className='info-bar__main'>
        <h3 className='info-bar__room'>{room}</h3>
        <p className='info-bar__people'>5 people</p>
      </div>
      <a className='info-bar__close' href="/">
        <p className='hidden'>Close chat</p>
      </a>
    </div>
  )
};

export default InfoBar;