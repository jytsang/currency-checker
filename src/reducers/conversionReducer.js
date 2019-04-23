import {
  FETCH_CONVERSION
} from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
      case FETCH_CONVERSION:
          return action.payload.results;
      default:
          return state;
  }
};