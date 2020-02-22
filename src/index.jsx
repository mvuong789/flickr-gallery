import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@a/store';

import './index.styl';

import FlickrSearchContainer from '@fsearch/FlickrSearchContainer';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h1>Flickr Search</h1>
      <FlickrSearchContainer />
    </div>
  </Provider>,
  document.getElementById('app'),
);
