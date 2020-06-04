import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import Slide, { slidePropTypes } from './Slide/Slide';
import 'swiper/css/swiper.css';
import './Slider.scss';

const Slider = (props) => {
  const { slides } = props;

  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    spaceBetween: 30,
  };

  return (
    <section className="fp-slider">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Swiper {...params}>
        {slides ? slides.map((slide) => (
          <div key={slide.id}>
            <Slide
              id={slide.id}
              title={slide.title}
              text={slide.text}
              img={slide.img}
            />
          </div>
        )) : null}
      </Swiper>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    slides: state.slides.slides,
  };
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape(slidePropTypes)).isRequired,
};

export default connect(mapStateToProps)(Slider);
