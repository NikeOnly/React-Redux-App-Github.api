import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import promise from 'redux-promise';
import { BrowserRouter as Router } from 'react-router-dom';

import reducers from './reducers';
import Routes from './routes';



import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas/sagas'


const sagaMiddleware = createSagaMiddleware()

const createStoreWithMiddleware = applyMiddleware(
  // promise,
  sagaMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducers);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,

  document.querySelector('.container'));
