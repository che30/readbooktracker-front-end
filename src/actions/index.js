// const CREATE_USER = 'CREATE USER'
// const SIGN_IN_USER = 'SIGN IN USER'
const NEW_USER_DETAILS = 'NEW_USER_DETAILS';
const newUserAction = (details) => ({
  type: NEW_USER_DETAILS,
  details,
});

export { newUserAction, NEW_USER_DETAILS };
