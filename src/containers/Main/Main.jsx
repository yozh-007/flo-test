import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.scss';

const Main = (props) => {
  const { children } = props;
  return (
    <div className={styles['fp-main']}>
      {children}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};

export default Main;
