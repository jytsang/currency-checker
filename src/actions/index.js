import axios from 'axios';

import {
  FETCH_CONVERSION,
  FETCH_HISTORICAL
} from './types';
import calculateConversion from '../utils/calculateConversion';
import getGraphDate from '../utils/getGraphDate';

// gets target currency value for base currency value
export const fetchConversion = (baseCurr = '', targetCurr = '', amount = 0) => async dispatch => {
  const response = await axios.get(`https://free.currconv.com/api/v7/convert?q=${baseCurr}_${targetCurr}&apiKey=94b2bea57b4a99b1acfc`);

  const data = {
    amount: parseFloat(amount),
    total: calculateConversion(amount, response.data.results[`${baseCurr}_${targetCurr}`].val),
    ...response.data.results[`${baseCurr}_${targetCurr}`]
  }
  
  dispatch({ type: FETCH_CONVERSION, payload: data });
}

// gets historical 7 day data for base to target currency
export const fetchHistorical = (baseCurr = '', targetCurr = '') => async dispatch => {
  const today = getGraphDate(0);
  const past = getGraphDate(6);
  
  const response = await axios.get(`https://free.currconv.com/api/v7/convert?q=${baseCurr}_${targetCurr}&date=${past}&endDate=${today}&apiKey=94b2bea57b4a99b1acfc`);
  
  dispatch({ type: FETCH_HISTORICAL, payload: response.data.results[`${baseCurr}_${targetCurr}`] });
}