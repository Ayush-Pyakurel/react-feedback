import React from 'react';
import propTypes from 'prop-types';

function Buttons({ children, typeProp, version, isDisabled }) {
  return (
    <button
      type={typeProp}
      className={`btn btn-${version}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

Buttons.defaultProps = {
  version: 'primary',
  typeProp: 'button',
  isDisabled: false,
  children: 'Submit',
};

Buttons.propTypes = {
  children: propTypes.node.isRequired,
  version: propTypes.string,
  type: propTypes.string,
  isDisabled: propTypes.bool,
};

export default Buttons;
