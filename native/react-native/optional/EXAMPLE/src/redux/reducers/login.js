import { LOGIN, CHANGE_LANG, SET_LOGIN_TYPE } from '../types';

const INITIAL_USER_STATE = {
  isLoggedIn: false,
  isEnglish: null
};

const INITIAL_LOGIN_STATE = {
  loginType: null
};

export const userState = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true };
    case CHANGE_LANG:
      return { ...state, isEnglish: action.bool };
    default:
      return state;
  }
};

export const loginState = (state = INITIAL_LOGIN_STATE, action) => {
  switch (action.type) {
    case SET_LOGIN_TYPE:
      return { ...state, loginType: action.typeStr };
    default:
      return state;
  }
};
