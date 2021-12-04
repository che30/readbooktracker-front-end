import { CATEGORY_FILTER } from '../actions';

const bookFilterReducer = (state = 'fiction', action) => {
  switch (action.type) {
    case CATEGORY_FILTER:
      return action.category;

    default:
      return state;
  }
};
export default bookFilterReducer;
