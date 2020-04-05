import React from 'react';
import './UserBar.scss'
import Avatar from "../Avatar/Avatar";

const UserBar = ({user}) => (
  <div className="user-bar">
    <Avatar letter={user[0]} />
    {user}
  </div>
);

export default UserBar;