import React from 'react';
import PropTypes from 'prop-types';

import './InfoBar.scss';

const InfoBar = ({room, usersCount, toggleSidebar}) => {
  return (
    <div className='info-bar'>
      <span className='info-bar__menu' onClick={ toggleSidebar }>
        <span/>
        <p className='hidden'>Menu</p>
      </span>
      <div className='info-bar__main'>
        <h3 className='info-bar__room'>{ room }</h3>
        <p className='info-bar__people'>
          {
            usersCount > 1 ? usersCount + ' people' : 'only you'
          }
        </p>
      </div>
      <a className='close-button' href="/">
        <p className='hidden'>Close chat</p>
      </a>
    </div>
  )
};

InfoBar.propTypes = {
  room: PropTypes.string,
  userCount: PropTypes.number,
  toggleSidebar: PropTypes.func
};

export default InfoBar;