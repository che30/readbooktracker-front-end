// const CREATE_USER = 'CREATE USER'
// const SIGN_IN_USER = 'SIGN IN USER'
const NEW_USER_DETAILS = 'NEW_USER_DETAILS';
const SAVE_NEW_USER_DETAILS = 'SAVE_NEW_USER_DETAILS';
const SAVE_CREATED_USER_DETAILS = 'SAVE_CREATED_USER_DETAILS';
const newUserAction = (details) => ({
  type: NEW_USER_DETAILS,
  details,
});
const saveNewUserDetails = (details) => ({
  type: SAVE_NEW_USER_DETAILS,
  details,
});
const saveCreatedUser = (details) => ({
  type: SAVE_CREATED_USER_DETAILS,
  details,
});
export {
  newUserAction,
  saveNewUserDetails,
  saveCreatedUser,
  NEW_USER_DETAILS,
  SAVE_NEW_USER_DETAILS,
  SAVE_CREATED_USER_DETAILS,
};
