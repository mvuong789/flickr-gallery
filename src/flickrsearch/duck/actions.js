import fetch from 'cross-fetch';

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
  console.log('test');
  return dispatch => {
    dispatch(requestImages());
    fetch('https://api.flickr.com/services/feeds/photos_public.gne?tags=kitten&format=json')
      .then(response => {
        dispatch(receiveImages(response.data));
      })
      .catch(error => {
        console.error(error);
      });
  }
}
