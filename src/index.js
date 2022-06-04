import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore,applyMiddleware } from 'redux';

import App from './components/App';
import RootReducer from './Reducer';

const logger = (obj) => {
  return function(next) {
    return function(action) {
      console.log("action-type",action.type);
      next(action);
    }
  }
}
const store = createStore(RootReducer,applyMiddleware(logger));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);


