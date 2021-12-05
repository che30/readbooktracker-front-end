import {
  NEW_BOOK_AUTHOR,
  NEW_BOOK_ISBN, NEW_BOOK_NAME,
  NEW_BOOK_PAGES,
} from '../actions';

const initialState = {
  name: '',
  author: '',
  isbn: '',
  pages: '',
};
const saveNewBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_BOOK_NAME:
      return {
        ...state,
        name: action.bookName,
      };
    case NEW_BOOK_AUTHOR:
      return {
        ...state,
        author: action.author,
      };
    case NEW_BOOK_ISBN:
      return {
        ...state,
        isbn: action.isbn,
      };
    case NEW_BOOK_PAGES:
      return {
        ...state,
        pages: action.pages,
      };

    default:
      return state;
  }
};
export default saveNewBookReducer;
