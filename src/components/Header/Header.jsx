import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Button from '../UI/Button/Button';

const Header = (props) => {
  const { title: { text, plan } } = props;
  return (
    <header className={styles['fp-header']}>
      <Button
        text=""
        hasWrapper={false}
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log('Exit/Close Button Clicked!');
        }}
        className={styles['fp-header__close']}
      />
      <h2 className={styles['fp-header__title']}>
        {text}
        {' '}
        <span>{plan}</span>
      </h2>
    </header>
  );
};

function mapStateToProps(state) {
  return {
    title: state.global.pageTitle,
  };
}

Header.propTypes = {
  title: PropTypes.shape({
    plan: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Header);
