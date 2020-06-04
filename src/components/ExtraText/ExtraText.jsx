import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ExtraText.module.scss';

const ExtraText = (props) => {
  const { text } = props;
  return (
    <div className={styles['fp-extra-text']}>
      <p>
        {text}
      </p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    text: state.global.infoText,
  };
}

ExtraText.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]).isRequired,
};

export default connect(mapStateToProps)(ExtraText);
