import React from 'react';

import './InfoBar.scss';

const InfoBar = ({room}) => {
  return (
    <div className='info-bar'>
      <h3 className='info-bar__room'>{room}</h3>
      <a className='info-bar__close' href="/" aria-label='Close chat'/>
    </div>
  )
};

export default InfoBar;