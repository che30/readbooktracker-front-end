import { combineReducers } from 'redux';
import LoginUser from './Login';
import newUserDetails from './NewUserDetails';
import ValidateErr from './validateErr';

const rootReducer = () => combineReducers({
  newUserDetails,
  LoginUser,
  ValidateErr,
});
export default rootReducer;
