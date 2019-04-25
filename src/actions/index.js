import axios from 'axios';

import {
  FETCH_CONVERSION
} from './types';
import calculateConversion from '../utils/calculateConversion';

// gets target currency value for base currency value
export const fetchConversion = (baseCurr = '', targetCurr = '', amount = 0) => async dispatch => {
  const response = await axios.get(`https://free.currconv.com/api/v7/convert?q=${baseCurr}_${targetCurr}&apiKey=94b2bea57b4a99b1acfc`);

  const data = {
    amount,
    total: calculateConversion(amount, response.data.results[`${baseCurr}_${targetCurr}`].val),
    ...response.data.results[`${baseCurr}_${targetCurr}`]
  }
  
  dispatch({ type: FETCH_CONVERSION, payload: data });
}