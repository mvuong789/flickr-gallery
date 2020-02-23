import { reducer } from '../reducers';
import * as TYPES from '../types';
import * as FIELDS from '../fields';

const { IMAGES, IS_FETCHING } = FIELDS;
const { REQUEST_IMAGES, RECEIVE_IMAGES } = TYPES;

describe('Testing fsearch reducers', () => {
  it('should return the intial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        [IMAGES]: [],
        [IS_FETCHING]: false,
      },
    );
  });

  it('should handle requestImages', () => {
    expect(reducer(
      {
        images: [],
        isFetching: false,
      },
      {
        type: REQUEST_IMAGES,
      },
    )).toEqual({
      images: [],
      isFetching: true,
    });
  });

  it('should handle receiveImages', () => {
    expect(reducer(
      {
        images: [],
        isFetching: true,
      },
      {
        type: RECEIVE_IMAGES,
        data: [{ id: 0, image: 'url' }],
      },
    )).toEqual({
      images: [{ id: 0, image: 'url' }],
      isFetching: false,
    });
  });
});
