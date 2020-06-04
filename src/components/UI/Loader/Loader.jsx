import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles['fp-loader-wrap']}>
    <span className={styles['fp-loader']}>
      <span />
      <span />
      <span />
      <span />
    </span>
  </div>

);

export default Loader;
