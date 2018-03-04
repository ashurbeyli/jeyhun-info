import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// main app
import routes from '../routes';
import { renderRoutes, matchRoutes } from 'react-router-config';

// store configuration
import messageReducer from '../reducers/message';
import homeReducer from '../reducers/homeReducer';
import blogsReducer from '../reducers/blogsReducer';
const reducer = combineReducers({
  messageReducer,
  homeReducer,
  blogsReducer
});
const store = createStore(reducer);

// Importing styles
import '../styles/custom.scss';
import '../styles/style.default.scss';

const serverRender = (req) => {
  const { url } = req;
  // For each route that matches
  const promises = matchRoutes(routes, url).map(({route, match}) => {
    // Load the data for that route. Include match information
    // so route parameters can be passed through.
    return store.dispatch(route.loadData(match));
  });

  // Wait for all the data to load
  return Promise.all(promises).then(() => {
    return {
      'initialContent':
        ReactDOMServer.renderToString(
          <Provider store={store}>
            <StaticRouter location={url}>
              {renderRoutes(routes)}
            </StaticRouter>
          </Provider>
        ),
      'serializedState': JSON.stringify(store.getState())
    };
  });
};

export default serverRender;

