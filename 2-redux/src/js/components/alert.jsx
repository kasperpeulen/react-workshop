import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const Alert = ({ description, onDismiss, title, type }) => (
  <div className={ `alert  alert--toast alert--${type}` } role="alert">
    <h3 className="alert__title">{ title }</h3>
    <div className="c-media  c-media--center">
      <div className="c-media__body">{ description }</div>
    </div>
    <Button onClick={ () => onDismiss() } />
  </div>
);

Alert.propTypes = {
  description: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;
