// const CREATE_USER = 'CREATE USER'
// const SIGN_IN_USER = 'SIGN IN USER'
const SET_NEW_USER_NAME = 'NEW USER NAME';
const SET_NEW_USER_EMAIL = 'NEW USER EMAIL';
const SET_NEW_USER_PASSWORD = 'NEW USER PASSWORD';
const SET_PASSWORD_CONFIRMATION = 'PASSWORD CONFIRMATION';
const SAVE_NEW_USER_DETAILS = 'SAVE_NEW_USER_DETAILS';
const SAVE_CREATED_USER_DETAILS = 'SAVE_CREATED_USER_DETAILS';
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
  SET_NEW_USER_NAME,
  SET_NEW_USER_EMAIL,
  SET_NEW_USER_PASSWORD,
  SET_PASSWORD_CONFIRMATION,
  SAVE_NEW_USER_DETAILS,
  SAVE_CREATED_USER_DETAILS,
};
