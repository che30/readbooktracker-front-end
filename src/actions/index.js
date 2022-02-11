// const CREATE_USER = 'CREATE USER'
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
const NEW_CATEGORY = 'NEW CATEGORY';
const NEW_BOOK_NAME = 'NEW BOOK NAME';
const NEW_BOOK_AUTHOR = 'NEW BOOK AUTHOR';
const NEW_BOOK_ISBN = 'NEW BOOK ISBN';
const NEW_BOOK_PAGES = 'NEW BOOK PAGES';
const ALL_CATEGORIES = 'ALL CATEGORIES';
const CATEGORY_FILTER = 'FILTER CATEGORY';
const BOOK_CREATED = 'BOOK CREATED';
const PAGES_READ = 'PAGES READ';
const MEASUREMENT_FILTER = 'MEASUREMENT FILTER';
const DATE = 'DATE';
const SUCCESSFUL_LOGIN = 'SUCCESSFUL LOGIN';
const UN_SUCCESSFUL_LOGIN = 'UNSUCCESSFUL LOGIN';
const SET_BOOKS__FROM_API = 'BOOKS FROM API';
const SET_FINISHED_STATUS = 'FINISHED STATUS';
const SET_MEASUREMENT = 'MEASUREMENT';
const SET_MEASUREMENT_STAT = 'MEASURMENT STAT';
const dateEntered = (date) => ({
  type: DATE,
  date,
});
const FilterMasurement = (elt) => ({
  type: MEASUREMENT_FILTER,
  elt,
});
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
const loginSuccessAction = (status) => ({
  type: SUCCESSFUL_LOGIN,
  status,
});
const unsucessfulLoginAction = (status) => ({
  type: UN_SUCCESSFUL_LOGIN,
  status,
});
const setBooksFromApi = (books) => ({
  type: SET_BOOKS__FROM_API,
  books,
});
const setFinishedStaus = (status) => ({
  type: SET_FINISHED_STATUS,
  status,
});
const setMeasurementApi = (measurment) => ({
  type: SET_MEASUREMENT,
  measurment,
});
const setMeasurementStatus = (status) => ({
  type: SET_MEASUREMENT_STAT,
  status,
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
  NewCategoryAction,
  NewBookName,
  NewBookAuthor,
  NewBookIsbn,
  NewBookPages,
  FilterCategories,
  bookCreated,
  pagesRead,
  FilterMasurement,
  dateEntered,
  loginSuccessAction,
  unsucessfulLoginAction,
  setBooksFromApi,
  setFinishedStaus,
  setMeasurementApi,
  setMeasurementStatus,
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
  NEW_CATEGORY,
  NEW_BOOK_NAME,
  NEW_BOOK_AUTHOR,
  NEW_BOOK_ISBN,
  NEW_BOOK_PAGES,
  ALL_CATEGORIES,
  CATEGORY_FILTER,
  BOOK_CREATED,
  PAGES_READ,
  MEASUREMENT_FILTER,
  DATE,
  SUCCESSFUL_LOGIN,
  UN_SUCCESSFUL_LOGIN,
  SET_BOOKS__FROM_API,
  SET_FINISHED_STATUS,
  SET_MEASUREMENT,
  SET_MEASUREMENT_STAT,
};
