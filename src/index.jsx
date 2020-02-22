import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@a/store';

import '@st/index.styl';

import FlickrSearch from '@fsearch/FlickrSearch';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h1>Flickr Search</h1>
      <FlickrSearch />
    </div>
  </Provider>,
  document.getElementById('app'),
);
