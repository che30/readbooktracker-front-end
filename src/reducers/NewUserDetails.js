import {
  SAVE_NEW_USER_DETAILS,
  SET_NEW_USER_EMAIL,
  SET_NEW_USER_NAME,
  SET_NEW_USER_PASSWORD,
  SET_PASSWORD_CONFIRMATION,
  YOUR_ACCOUNT_IS_CREATED,
} from '../actions';

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  token: '',
  loading: false,

};
const newUserDetails = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_USER_NAME:
      return {
        ...state,
        username: action.username,

      };
    case SET_NEW_USER_EMAIL:
      return {
        ...state,
        email: action.email,

      };
    case SET_NEW_USER_PASSWORD:
      return {
        ...state,
        password: action.password,

      };
    case SET_PASSWORD_CONFIRMATION:
      return {
        ...state,
        passwordConfirmation: action.passwordConfirmation,

      };
    case SAVE_NEW_USER_DETAILS:
      return {
        ...state,
        token: action.details.token,
      };
    case YOUR_ACCOUNT_IS_CREATED:
      console.log('after account is created');
      console.log(action.msg);
      return {
        ...state,
        loading: action.msg,
      };
    default:
      return state;
  }
};
export default newUserDetails;
