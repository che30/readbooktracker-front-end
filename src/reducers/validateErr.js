import { VALIDATION_ERROR } from '../actions';

const initialState = {
  error: '',
};

const ValidateErr = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATION_ERROR:
      // console.log(action.error);
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
export default ValidateErr;
