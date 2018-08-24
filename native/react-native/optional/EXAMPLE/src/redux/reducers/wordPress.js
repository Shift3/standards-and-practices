import { FETCH_NOTES } from '../types';

const INITIAL_NOTES_STATE = {
  selectedNote: '',
  allNotes: null
};

export const notesState = (state = INITIAL_NOTES_STATE, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        allNotes: action.notesArr,
        selectedNote: action.notesArr[0].content.rendered
      };
    default:
      return state;
  }
};
