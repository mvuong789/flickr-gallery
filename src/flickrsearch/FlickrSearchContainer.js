import { connect } from 'react-redux';

import { fetchImages } from '@fsearchD/actions';
import { getImages, getIsFetching } from '@fsearchD/selectors'
import FlickrSearchComponent from './FlickrSearchComponent';

const mapStateToProps = (state) => {
  const { flickrsearch } = state;

  return {
    images: getImages(flickrsearch),
    isFetching: getIsFetching(flickrsearch),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchImages: (data) => {
    dispatch(fetchImages(data));
  }
});

const FlickrSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlickrSearchComponent);

export default FlickrSearchContainer;
