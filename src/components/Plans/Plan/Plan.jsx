import React from 'react';
import PropTypes from 'prop-types';
import styles from './Plan.module.scss';

export const Plan = (
  {
    plan: {
      date, dateText, id, price, specialOffer, term,
    },
    onClick,
    className,
  },
) => {
  const planStyles = [styles['fp-plan']];
  if (specialOffer) {
    planStyles.push(styles['fp-plan--popular']);
  }
  if (className) {
    planStyles.push(styles[`fp-plan--${className}`]);
  }
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      className={planStyles.join(' ')}
      id={id}
      onClick={() => onClick(id)}
      onKeyPress={() => onClick(id)}
    >
      <span className={styles['fp-plan__popular']}>Most popular</span>
      <span className={styles['fp-plan__inner']}>
        { date.length > 0
          ? <div className={styles['fp-plan__date-num']}>{date}</div>
          : null}
        <span className={styles['fp-plan__date-text']}>{dateText}</span>
        <span className={styles['fp-plan__price']}>{price}</span>
        <span className={styles['fp-plan__price-term']}>
          &#47;
          {term}
        </span>
      </span>
    </li>
  );
};


export const planPropTypes = {
  date: PropTypes.string,
  dateText: PropTypes.string,
  id: PropTypes.string,
  price: PropTypes.string,
  specialOffer: PropTypes.bool,
  term: PropTypes.string,
};

Plan.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  plan: PropTypes.shape(planPropTypes).isRequired,
};
