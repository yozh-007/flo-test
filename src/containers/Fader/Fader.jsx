import React from 'react';
import PropTypes from 'prop-types';
import styles from './Fader.module.scss';

const Fader = (props) => {
  const { children } = props;
  return (
    <div className={styles['fp-fader']}>
      {children}
    </div>
  );
};

Fader.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};

export default Fader;
