import initialGlobalStates from '../initialStates/initialGlobalStates';
import { SET_GLOBAL_STATE } from '../actions/actionTypes';

export default function globalReducer(state = initialGlobalStates, action) {
  switch (action.type) {
    case SET_GLOBAL_STATE:
      return {
        ...state,
        pageTitle: action.payload.pageTitle,
        infoText: action.payload.infoText,
      };
    default:
      return state;
  }
}
