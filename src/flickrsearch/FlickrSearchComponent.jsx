import React from 'react';

import Search from '@search/Search';
import Card from '../card/Card';
import { parseDateHumanReadable } from '@u/helpers';

const FlickrSearchComponent = (props) => {
  const { fetchImages, images, isFetching } = props;

  let flickrImages = [];

  if (images.length > 0) {
    flickrImages = images.map((image, index) => {
      const { author, date_taken, link, media: { m }, tags } = image;

      return (
        <Card key={`flickr-${index}`}>
          <img src={m} onClick={() => window.open(`${link}`, "_blank")} />
          <div className="card-caption">
            <div>{author}</div>
            <div>{parseDateHumanReadable(date_taken)}</div>
            <div>{tags}</div>
            <a href={link}>Full size</a>
          </div>
        </Card>
      );
    });
  }

  return (
    <section className="flickr-search">
      <Search
        onChange={text => fetchImages(text)}
      />
      <section className="flickr-images">
        {flickrImages}
      </section>
    </section>
  );
}

export default FlickrSearchComponent;
