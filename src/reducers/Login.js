import {
  LOGIN_USER_EMAIL,
  LOGIN_USER_PASSWORD,
  SUCCESSFUL_LOGIN,
  UN_SUCCESSFUL_LOGIN,

} from '../actions';

const initialState = {
  email: '',
  password: '',
  loggedIn: false,
  unsucceful: false,
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
    case SUCCESSFUL_LOGIN:
      return {
        ...state,
        loggedIn: action.status,
      };
    case UN_SUCCESSFUL_LOGIN:
      return {
        ...state,
        unsucceful: action.status,
      };
    default:
      return state;
  }
};
export default LoginUser;
