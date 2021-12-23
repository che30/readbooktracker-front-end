import { MEASUREMENT_FILTER } from '../actions';

const MeasurementFilterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case MEASUREMENT_FILTER:
      return action.elt;

    default:
      return state;
  }
};
export default MeasurementFilterReducer;
