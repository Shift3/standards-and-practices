import { CHANGE_LANG, SET_LOGIN_TYPE } from '../types';

export const setEnglish = bool => ({
  type: CHANGE_LANG,
  bool
});

export const setLoginType = typeStr => ({
  type: SET_LOGIN_TYPE,
  typeStr
});
