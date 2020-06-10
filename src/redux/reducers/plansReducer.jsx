import { SET_ACTIVE_PLAN_MSG, SET_ACTIVE_PLAN_ID, SET_PLANS_STATE } from '../actions/actionTypes';
import initialPlans from '../initialStates/initialPlans';

export default function plansReducer(state = initialPlans, action) {
  switch (action.type) {
    case SET_ACTIVE_PLAN_ID:
      return {
        ...state,
        activePlanId: action.payload,
      };
    case SET_ACTIVE_PLAN_MSG:
      return {
        ...state,
        activePlanMsg: action.payload,
      };
    case SET_PLANS_STATE:
      return {
        ...state,
        activePlanId: action.payload.activePlanId,
        activePlanMsg: action.payload.activePlanMsg,
        btn: action.payload.btn,
        plans: action.payload.plans,
      };
    default:
      return state;
  }
}
