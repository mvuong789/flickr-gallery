import * as TYPES from './types';

const { RECEIVE_IMAGES, REQUEST_IMAGES } = TYPES;

export const receiveImages = (data) => ({
  type: RECEIVE_IMAGES,
  data,
});

export const requestImages = () => ({
  type: REQUEST_IMAGES,
});

export const fetchImages = (data) => {
  return dispatch => {
    dispatch(requestImages());
  }
}
