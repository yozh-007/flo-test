import { GET_ACTIVE_PLAN_MSG, SET_ACTIVE_PLAN_ID, SET_PLANS_STATE } from './actionTypes';

export function setActivePlanId(id) {
  return {
    type: SET_ACTIVE_PLAN_ID,
    payload: id,
  };
}

export function getActivePlanMsg(msg) {
  return {
    type: GET_ACTIVE_PLAN_MSG,
    payload: msg,
  };
}

export function setPlansState(plans) {
  return {
    type: SET_PLANS_STATE,
    payload: plans,
  };
}
