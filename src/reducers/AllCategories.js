import { ALL_CATEGORIES, FETCHING_CATEGORIES, FINISHED_FETCHING_CATEGORIES } from '../actions';

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
    case FETCHING_CATEGORIES:
      return {
        ...state,
        loading: action.loading,
      };
    case FINISHED_FETCHING_CATEGORIES:
      return {
        ...state,
        finished: action.finished,
      };
    default:
      return state;
  }
};
export default AllCategories;
