import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import conversionReducer from './conversionReducer';
import historicalReducer from './historicalReducer';

export default combineReducers({
  form: formReducer,
  conversion: conversionReducer,
  historical: historicalReducer
});