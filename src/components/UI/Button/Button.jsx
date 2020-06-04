import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import ConditionalWrapper from '../../../helpers/conditionalWrapper';

const Button = ({
  onClick, text, className, hasWrapper,
}) => (
  <ConditionalWrapper
    condition={hasWrapper}
    wrapper={(children) => <div className={styles['fp-btn-wrap']}>{children}</div>}
  >
    <button type="button" onClick={onClick} onKeyPress={onClick} className={className}>
      {text || ''}
    </button>
  </ConditionalWrapper>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  hasWrapper: PropTypes.bool.isRequired,
};

export default Button;
