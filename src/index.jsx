import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@a/store';

import '@st/index.styl';

import Search from '@search/Search';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h1>Hello</h1>
      <Search />
    </div>
  </Provider>,
  document.getElementById('app'),
);
