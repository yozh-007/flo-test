import { combineReducers } from 'redux';
import plans from './plansReducer';
import global from './globalReducer';
import slides from './slidesReducer';


export default combineReducers({ global, slides, plans });
