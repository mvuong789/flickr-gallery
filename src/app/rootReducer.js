import { combineReducers } from 'redux';

import fsearchReducer from '@fsearch/index';

const rootReducer = combineReducers({
  flickrsearch: fsearchReducer,
});

export default rootReducer;
