import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  counter: counterReducer,
  result: resultReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
