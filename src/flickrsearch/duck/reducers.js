import produce from 'immer';

import * as FIELDS from './fields';
import * as TYPES from './types';

const { IMAGES, IS_FETCHING } = FIELDS;
const { RECEIVE_IMAGES, REQUEST_IMAGES } = TYPES;

const initialState = {
  [IMAGES]: [],
  [IS_FETCHING]: false,
};

const reducer = (state = initialState, action) => {
  const { type, data } = action;
  return produce(state, draft => {
    switch (type) {
      case RECEIVE_IMAGES: {
        draft[IMAGES] = data;
        draft[IS_FETCHING] = false;
        break;
      }
      case REQUEST_IMAGES: {
        draft[IS_FETCHING] = true;

        break;
      }
      default:
        return draft;
    }
  });
};

export {
  reducer,
};
