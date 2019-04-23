import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import conversionReducer from './conversionReducer';

export default combineReducers({
  form: formReducer,
  conversion: conversionReducer
});