import React from "react";
import PropTypes from 'prop-types';

import './CloseButton.scss';

const CloseButton = ({ clickHandler }) => {
  return (
    <span className='close-button' onClick={ clickHandler }>
      <p className='hidden'>Menu</p>
    </span>
  )
};

CloseButton.propTypes = {
  clockHandler: PropTypes.func
};

export default CloseButton;