import { NEW_USER_DETAILS } from '../actions';

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',

};
const newUserDetails = (state = initialState, action) => {
  console.log('new user');
  console.log(action.details);
  switch (action.type) {
    case NEW_USER_DETAILS:
      if (action.details.username) {
        console.log(action);
        return {
          ...state,
          username: action.details.username,
        };
      } if (action.datails.email) {
        return {
          ...state,
          email: action.details.email,
        };
      } if (action.datails.password) {
        return {
          ...state,
          password: action.details.password,
        };
      } if (action.datails.passwordConfirmation) {
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
