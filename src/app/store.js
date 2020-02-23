import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(
  thunkMiddleware,
  logger,
));

export default store;
