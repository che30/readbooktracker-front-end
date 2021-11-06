import { NEW_USER_DETAILS } from '../actions';

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',

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
    default:
      return state;
  }
  return false;
};
export default newUserDetails;
