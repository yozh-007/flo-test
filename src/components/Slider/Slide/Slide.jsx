import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../UI/Image/Image';
import styles from './Slide.module.scss';

const Slide = ({
  img, title, text,
}) => (
  <div className={styles['fp-slide']}>
    <div className={styles['fp-slide__inner']}>
      <span className={styles['fp-slide__img-wrap']}>
        <Image
          src={img}
          alt={title}
          className={styles['fp-slide__img']}
        />
      </span>
      <h3 className={styles['fp-slide__title']}>{title}</h3>
      <h4 className={styles['fp-slide__info']}>{text}</h4>
    </div>
  </div>
);

export const slidePropTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

Slide.defaultProps = {
  img: '',
  text: '',
  title: '',
};

Slide.propTypes = slidePropTypes;

export default Slide;
