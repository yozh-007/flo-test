import { SET_SLIDES_STATE } from './actionTypes';

export default function setSlidesState(slides) {
  return {
    type: SET_SLIDES_STATE,
    payload: slides,
  };
}
