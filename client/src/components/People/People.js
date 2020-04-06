import React from 'react';
import PropTypes from 'prop-types';
import Avatar from "react-avatar";

import './People.scss';

const People = ({ users }) => {
  return (
    <div className="people">
      <p className='people__title sidebar__title'>People</p>
      {
        users &&
        <ul className='people__list list'>
          {users.map(({ name }) => (
            <li key={ name } className="people__item">
              <Avatar name={ name } size={ 50 } round="50px" maxInitials={ 2 }/>
              { name }
            </li>
          ))}
        </ul>
      }
    </div>
  )
};

People.propTypes = {
  users: PropTypes.array
};

export default People;