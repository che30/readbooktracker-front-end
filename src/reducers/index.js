import { combineReducers } from 'redux';
import LoginUser from './Login';
import newUserDetails from './NewUserDetails';
import ValidateErr from './validateErr';
import saveCategoryName from './saveCatName';
import saveNewBookReducer from './saveNewBook';
import AllCategories from './AllCategories';
import bookFilterReducer from './CategoryFilter';
import measurementReducer from './Measurement';
import MeasurementFilterReducer from './FilterMeasurementReducer';
import DashboardReducer from './Dahboard';

const rootReducer = () => combineReducers({
  newUserDetails,
  LoginUser,
  ValidateErr,
  saveCategoryName,
  saveNewBookReducer,
  AllCategories,
  bookFilterReducer,
  measurementReducer,
  MeasurementFilterReducer,
  DashboardReducer,
});
export default rootReducer;
