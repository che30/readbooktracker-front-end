import { NEW_CATEGORY } from '../actions';

const initialState = {
  categoryName: '',
};
const saveCategoryName = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CATEGORY:
      return {
        ...state,
        categoryName: action.cat,
      };
    default:
      return state;
  }
};
export default saveCategoryName;
