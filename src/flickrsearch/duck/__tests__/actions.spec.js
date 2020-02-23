import * as actions from '../actions';
import * as TYPES from '../types';

const { RECEIVE_IMAGES, REQUEST_IMAGES } = TYPES;

describe('Testing fsearch actions', () => {
  it('should create an action to receive images', () => {
    const expectedAction = {
      type: RECEIVE_IMAGES,
      data: 'test',
    }

    expect(actions.receiveImages('test')).toEqual(expectedAction);
  });

  it('should create an action to request images', () => {
    const expectedAction = {
      type: REQUEST_IMAGES,
    }

    expect(actions.requestImages()).toEqual(expectedAction);
  });
});
