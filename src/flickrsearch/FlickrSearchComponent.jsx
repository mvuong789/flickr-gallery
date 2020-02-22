import React from 'react';

import Search from '@search/Search';

const FlickrSearchComponent = (props) => {
  const { fetchImages, images, isFetching } = props;

  return (
    <section className="flickr-search">
      <Search
        onChange={text => fetchImages(text)}
      />
    </section>
  );
}

export default FlickrSearchComponent;
