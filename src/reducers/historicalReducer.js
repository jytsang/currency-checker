import {
  FETCH_HISTORICAL
} from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
      case FETCH_HISTORICAL:
          return action.payload;
      default:
          return state;
  }
};