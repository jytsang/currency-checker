import axios from 'axios';

import {
  FETCH_CONVERSION
} from './types';

// gets target currency value for base currency value
export const fetchConversion = (baseCurr, targetCurr) => {
  let response = {};
  dispatch({ type: FETCH_CONVERSION, payload: response.data });
}