import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.scss';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className={styles['fp-layout']}>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
