import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// main app
import routes from '../routes';
import { renderRoutes } from 'react-router-config';
import RouteDataLoader from '../route-data-loader';

// Importing styles
import '../styles/custom.scss';
import '../styles/style.default.scss';

// store configuration TODO:: need to refactor
import messageReducer from '../reducers/message';
import homeReducer from '../reducers/homeReducer';
import blogsReducer from '../reducers/blogsReducer';
const reducer = combineReducers({
  messageReducer,
  homeReducer,
  blogsReducer
});
const store = createStore(reducer, window.__PRELOADED_STATE__);

// Rendering DOM
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <RouteDataLoader routes={routes} dispatch={store.dispatch}>
        { renderRoutes(routes) }
      </RouteDataLoader>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);