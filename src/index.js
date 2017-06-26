import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter as Router } from 'react-router-dom';

import reducers from './reducers';
import Routes from './routes';

const createStoreWithMiddleware = applyMiddleware(
  promise,
)(createStore);

const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,

  document.querySelector('.container'));
