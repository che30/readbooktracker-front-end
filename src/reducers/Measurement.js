import { PAGES_READ } from '../actions';

const initialState = {
  pagesRead: '',
};
const measurementReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGES_READ:
      return {
        ...state,
        pagesRead: action.pg,
      };
    default:
      return state;
  }
};
export default measurementReducer;
