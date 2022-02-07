import { ALL_CATEGORIES } from '../actions';

const initialState = {
  categories: {},
  loading: '',
  finished: '',
};
const AllCategories = (state = initialState, action) => {
  switch (action.type) {
    case ALL_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
};
export default AllCategories;
