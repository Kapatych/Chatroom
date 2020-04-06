import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';

import './UserBar.scss'

const UserBar = ({ user }) => (
  <div className="user-bar">
    <Avatar name={ user } size={ 50 } round="50px" maxInitials={ 2 } />
    { user }
  </div>
);

UserBar.propTypes = {
  user: PropTypes.string
};

export default UserBar;