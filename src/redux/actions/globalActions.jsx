import axios from '../../helpers/axios/axios-base';
import { SET_GLOBAL_STATE } from './actionTypes';
import retrieveAxiosData from '../../helpers/axios/retrieveAxiosData';
import setSlidesState from './slidesActions';
import { setPlansState } from './plansActions';

export function setGlobalState(global) {
  return {
    type: SET_GLOBAL_STATE,
    payload: global,
  };
}

export function fetchData() {
  return async (dispatch) => {
    await Promise
      .all([
        axios.get('globalState.json'),
        axios.get('slideState.json'),
        axios.get('planState.json'),
      ])
      .then(([global, slides, plans]) => {
        dispatch(setGlobalState(retrieveAxiosData(global.data)));
        dispatch(setSlidesState(retrieveAxiosData(slides.data)));
        dispatch(setPlansState(retrieveAxiosData(plans.data)));
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
      });
  };
}
