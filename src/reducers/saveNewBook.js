import { NEW_BOOK_AUTHOR, NEW_BOOK_ISBN, NEW_BOOK_NAME, NEW_BOOK_PAGES } from "../actions";

const initialState = {
  name: '',
  Author: '',
  isbn: '',
  pages: '',
}
const saveNewBookReducer = (state = initialState, action) =>{
  switch (action.type) {
    case NEW_BOOK_NAME:
      return{
        ...state,
        name: action.name
      }
    case NEW_BOOK_AUTHOR:
      return{
        ...state,
        name: action.author
      }
    case NEW_BOOK_ISBN:
      return{
        ...state,
        name: action.isbn
      }
    case NEW_BOOK_PAGES:
      return{
        ...state,
        name: action.pages
      }
  
    default:
      return state;
  }
}
export default saveNewBookReducer