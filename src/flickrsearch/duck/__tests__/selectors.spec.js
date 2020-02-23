import { getImages, getIsFetching } from '../selectors';

describe('Testing fsearch selectors', () => {
  it('should return images when getImages', () => {
    expect(getImages({ images: [] })).toEqual([]);
  });

  it('should return isFetching when getIsFetching', () => {
    expect(getIsFetching({ isFetching: false })).toEqual(false);
  });
});
