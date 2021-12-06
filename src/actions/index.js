// const CREATE_USER = 'CREATE USER'

import getAllCategories from '../apirequests/GetAllCategories';

// const SIGN_IN_USER = 'SIGN IN USER'
const SET_NEW_USER_NAME = 'NEW USER NAME';
const SET_NEW_USER_EMAIL = 'NEW USER EMAIL';
const SET_NEW_USER_PASSWORD = 'NEW USER PASSWORD';
const SET_PASSWORD_CONFIRMATION = 'PASSWORD CONFIRMATION';
const SAVE_NEW_USER_DETAILS = 'SAVE_NEW_USER_DETAILS';
const SAVE_CREATED_USER_DETAILS = 'SAVE_CREATED_USER_DETAILS';
const LOGIN_USER_EMAIL = 'LOGIN_USER_EMAIL';
const LOGIN_USER_PASSWORD = 'LOGIN_USER_PASSWORD';
const LOGIN_USER_AUTH = 'LOGIN_USER_AUTH';
const YOUR_ACCOUNT_IS_CREATED = 'YOUR ACCOUNT CREATED';
const VALIDATION_ERROR = 'VALIDATION_ERROR';
const LOG_IN_LOG_OUT_STATE = 'LOG IN LOG OUT STATE';
const NEW_CATEGORY = 'NEW CATEGORY';
const NEW_BOOK_NAME = 'NEW BOOK NAME';
const NEW_BOOK_AUTHOR = 'NEW BOOK AUTHOR';
const NEW_BOOK_ISBN = 'NEW BOOK ISBN';
const NEW_BOOK_PAGES = 'NEW BOOK PAGES';
const ALL_CATEGORIES = 'ALL CATEGORIES';
const FETCHING_CATEGORIES = 'FETCHING CATEGORIES';
const FINISHED_FETCHING_CATEGORIES = 'FINISHED FETCHING CATEGORIES';
const CATEGORY_FILTER = 'FILTER CATEGORY';
const BOOK_CREATED = 'BOOK CREATED';
const PAGES_READ = 'PAGES_LEFT';
const pagesRead = (pg) => ({
  type: PAGES_READ,
  pg,
});
const bookCreated = (status) => ({
  type: BOOK_CREATED,
  status,
});
const FilterCategories = (category) => ({
  type: CATEGORY_FILTER,
  category,
});
const fetchingAllCategories = (msg) => ({
  type: FETCHING_CATEGORIES,
  msg,
});
const finishedFetchingAllCategories = (msg) => ({
  type: FINISHED_FETCHING_CATEGORIES,
  msg,
});
const AllCategories = (categories) => ({
  type: ALL_CATEGORIES,
  categories,
});
const fetchAllCategories = () => (dispatch) => {
  const data = JSON.parse(localStorage.getItem('data'));
  if (data !== null && Object.keys(data).length !== 0) {
    dispatch(fetchingAllCategories('fetching categories'));
    getAllCategories().then((res) => {
      if (res.data) {
        dispatch(finishedFetchingAllCategories('finished fetching categories'));
        dispatch(AllCategories(res.data));
      } else {
        localStorage.removeItem('data');
      }
    });
  }
};
const NewBookName = (bookName) => ({
  type: NEW_BOOK_NAME,
  bookName,
});
const NewBookAuthor = (author) => ({
  type: NEW_BOOK_AUTHOR,
  author,
});
const NewBookIsbn = (isbn) => ({
  type: NEW_BOOK_ISBN,
  isbn,
});
const NewBookPages = (pages) => ({
  type: NEW_BOOK_PAGES,
  pages,
});
const NewCategoryAction = (cat) => ({
  type: NEW_CATEGORY,
  cat,
});
const LogInLogOutState = (status) => ({
  type: LOG_IN_LOG_OUT_STATE,
  status,
});
const ValidateEr = (error) => ({
  type: VALIDATION_ERROR,
  error,
});
const accountBeignCreated = (msg) => ({
  type: YOUR_ACCOUNT_IS_CREATED,
  msg,
});
const loginUserEmail = (email) => ({
  type: LOGIN_USER_EMAIL,
  email,
});
const loguserPassword = (password) => ({
  type: LOGIN_USER_PASSWORD,
  password,
});
const logUserAuth = (authorization) => ({
  type: LOGIN_USER_AUTH,
  authorization,
});
const setNewUserName = (username) => ({
  type: SET_NEW_USER_NAME,
  username,
});
const setNewUserEmail = (email) => ({
  type: SET_NEW_USER_EMAIL,
  email,
});
const setNewUserPassword = (password) => ({
  type: SET_NEW_USER_PASSWORD,
  password,
});
const setPasswordConfirmation = (passwordConfirmation) => ({
  type: SET_PASSWORD_CONFIRMATION,
  passwordConfirmation,
});
const saveCreatedUser = (details) => ({
  type: SAVE_CREATED_USER_DETAILS,
  details,
});
export {
  saveCreatedUser,
  setNewUserName,
  setNewUserEmail,
  setNewUserPassword,
  setPasswordConfirmation,
  loguserPassword,
  logUserAuth,
  loginUserEmail,
  accountBeignCreated,
  ValidateEr,
  LogInLogOutState,
  NewCategoryAction,
  NewBookName,
  NewBookAuthor,
  NewBookIsbn,
  NewBookPages,
  fetchAllCategories,
  FilterCategories,
  bookCreated,
  pagesRead,
  LOGIN_USER_EMAIL,
  LOGIN_USER_PASSWORD,
  LOGIN_USER_AUTH,
  SET_NEW_USER_NAME,
  SET_NEW_USER_EMAIL,
  SET_NEW_USER_PASSWORD,
  SET_PASSWORD_CONFIRMATION,
  SAVE_NEW_USER_DETAILS,
  SAVE_CREATED_USER_DETAILS,
  YOUR_ACCOUNT_IS_CREATED,
  VALIDATION_ERROR,
  LOG_IN_LOG_OUT_STATE,
  NEW_CATEGORY,
  NEW_BOOK_NAME,
  NEW_BOOK_AUTHOR,
  NEW_BOOK_ISBN,
  NEW_BOOK_PAGES,
  ALL_CATEGORIES,
  FETCHING_CATEGORIES,
  FINISHED_FETCHING_CATEGORIES,
  CATEGORY_FILTER,
  BOOK_CREATED,
  PAGES_READ,
};
