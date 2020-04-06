import React from "react";
import PropTypes from 'prop-types';

import './Sidebar.scss';

import CloseButton from "../CloseButton/CloseButton";

const Sidebar = ({ children, reference, toggleSidebar }) => {
  return (
    <div className='sidebar' ref={ reference }>
      <CloseButton clickHandler={ toggleSidebar } />
      { children }
    </div>
  )
};

Sidebar.propTypes = {
  reference: PropTypes.object,
  toggleSidebar: PropTypes.func
};

export default Sidebar;