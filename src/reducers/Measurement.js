import { DATE, PAGES_READ } from '../actions';

// const current = new Date();
// const date = current.getDate() / current.getMonth() + 1 / current.getFullYear();
const initialState = {
  pagesRead: '',
  date: '',
};
const measurementReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGES_READ:
      return {
        ...state,
        pagesRead: action.pg,
      };
    case DATE:
      return {
        ...state,
        date: action.date,
      };
    default:
      return state;
  }
};
export default measurementReducer;
