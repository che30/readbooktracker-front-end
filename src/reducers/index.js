import { combineReducers } from 'redux';
import LoginUser from './Login';
import newUserDetails from './NewUserDetails';
import ValidateErr from './validateErr';
import saveCategoryName from './saveCatName';

const rootReducer = () => combineReducers({
  newUserDetails,
  LoginUser,
  ValidateErr,
  saveCategoryName,
});
export default rootReducer;
