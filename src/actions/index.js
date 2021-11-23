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
const LOG_IN_LOG_OUT_STATE = 'LOG IN LOG OUT STATE';
const NEW_CATEGORY = 'NEW CATEGORY';

const NewCategory = (cat) =>({
type: NEW_CATEGORY,
cat,
})
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
  NewCategory,
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
};
