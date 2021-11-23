import { NEW_CATEGORY } from "../actions";

const initialState = {
  categoryName: ''
}
const saveCategoryName = (state=initialState,action) =>{
  switch (action) {
    case NEW_CATEGORY:
      return{
        ...state,
        categoryName: action.cat,
      }
    default:
      return state;
  }
}
export default saveCategoryName