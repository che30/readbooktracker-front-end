import {
  LOGIN_USER_AUTH,
  LOGIN_USER_EMAIL,
  LOGIN_USER_PASSWORD,

} from '../actions';

const initialState = {
  email: '',
  password: '',
  authorization: '',
};

const LoginUser = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_EMAIL:
      console.log('hit reducers');
      return {
        ...state,
        email: action.email,
      };
    case LOGIN_USER_PASSWORD:
      console.log({ ...state });
      return {
        ...state,
        password: action.password,
      };
    case LOGIN_USER_AUTH:
      return {
        ...state,
        authorization: action.authorization,
      };
    default:
      return state;
  }
};
export default LoginUser;
