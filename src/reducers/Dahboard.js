import {
  SET_BOOKS__FROM_API, SET_FINISHED_STATUS, SET_MEASUREMENT, SET_MEASUREMENT_STAT,
} from '../actions';

const initialState = {
  books: [],
  finished: false,
  measurements: [],
  measurmentStatus: false,
};
const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS__FROM_API:
      return {
        ...state,
        books: action.books,
      };
    case SET_FINISHED_STATUS:
      return {
        ...state,
        finished: action.status,
      };
    case SET_MEASUREMENT:
      return {
        ...state,
        measurements: action.measurment,
      };
    case SET_MEASUREMENT_STAT:
      return {
        ...state,
        measurmentStatus: action.status,
      };
    default:
      return state;
  }
};
export default DashboardReducer;
