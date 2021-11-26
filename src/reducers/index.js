import { combineReducers } from 'redux';
import LoginUser from './Login';
import newUserDetails from './NewUserDetails';
import ValidateErr from './validateErr';
import saveCategoryName from './saveCatName';
import saveNewBookReducer from './saveNewBook';

const rootReducer = () => combineReducers({
  newUserDetails,
  LoginUser,
  ValidateErr,
  saveCategoryName,
  saveNewBookReducer,
});
export default rootReducer;
