import initialSlides from '../initialStates/initialSlides';
import { SET_SLIDES_STATE } from '../actions/actionTypes';

export default function slidesReduces(state = initialSlides, action) {
  switch (action.type) {
    case SET_SLIDES_STATE:
      return {
        ...state,
        slides: action.payload.slides,
      };
    default:
      return state;
  }
}
