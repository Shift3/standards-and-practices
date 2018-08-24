import { combineReducers } from 'redux';
import { userState, loginState } from './login';
import { notesState } from './wordPress';

export default combineReducers({
  userState,
  loginState,
  notesState
});
