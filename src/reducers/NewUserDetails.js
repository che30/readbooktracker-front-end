import { NEW_USER_DETAILS, SAVE_NEW_USER_DETAILS } from '../actions';

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  token: '',

};
const newUserDetails = (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER_DETAILS:
      if (action.details.username) {
        return {
          ...state,
          username: action.details.username,

        };
      } if (action.details.email) {
        return {
          ...state,
          email: action.details.email,
        };
      } if (action.details.password) {
        return {
          ...state,
          password: action.details.password,
        };
      } if (action.details.passwordConfirmation) {
        return {
          ...state,
          passwordConfirmation: action.details.passwordConfirmation,
        };
      }
      break;
    case SAVE_NEW_USER_DETAILS:
      return {
        ...state,
        token: action.details.token,
      };
    default:
      return state;
  }
  return false;
};
export default newUserDetails;
