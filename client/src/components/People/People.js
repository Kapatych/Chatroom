import React from 'react';

import './People.scss';
import Avatar from "../Avatar/Avatar";

const People = ({users}) => {
  return (
    <div className="people">
      <p className='people__title sidebar__title'>People</p>
      {
        users
          ? (
            <ul className='people__list list'>
              {users.map(({name}) => (
                <li key={name} className="people__item">
                  <Avatar letter={name[0]} />
                  {name}
                </li>
              ))}
            </ul>
          )
          : null
      }
    </div>
  )
};

export default People;