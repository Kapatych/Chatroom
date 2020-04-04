import React from 'react';

import './People.scss';

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