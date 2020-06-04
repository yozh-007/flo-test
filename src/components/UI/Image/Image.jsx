import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, name, className }) => (
  <img src={src} alt={name} className={className} />
);

Image.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string,
  src: PropTypes.string.isRequired,
};

Image.defaultProps = {
  name: '',
};

export default Image;
