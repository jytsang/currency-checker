import axios from 'axios';

import {
  FETCH_CONVERSION
} from './types';

// gets target currency value for base currency value
export const fetchConversion = (baseCurr = '', targetCurr = '') => async dispatch => {
  const response = await axios.get(`https://free.currconv.com/api/v7/convert?q=${baseCurr}_${targetCurr}&apiKey=94b2bea57b4a99b1acfc`);
  
  dispatch({ type: FETCH_CONVERSION, payload: response.data.results[`${baseCurr}_${targetCurr}`] });
}