import { combineReducers } from 'redux';
import LoginUser from './Login';
import newUserDetails from './NewUserDetails';

const rootReducer = () => combineReducers({
  newUserDetails,
  LoginUser,
});
export default rootReducer;
