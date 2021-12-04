import {
  LOGIN_USER_EMAIL,
  LOGIN_USER_PASSWORD,
  LOG_IN_LOG_OUT_STATE,

} from '../actions';

const initialState = {
  email: '',
  password: '',
  loggedIn: false,
};

const LoginUser = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case LOGIN_USER_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case LOG_IN_LOG_OUT_STATE:
      return {
        ...state,
        loggedIn: action.status,
      };
    default:
      return state;
  }
};
export default LoginUser;
