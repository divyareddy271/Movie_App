import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

import App from './components/App';
import RootReducer from './Reducer';

const store = createStore(RootReducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);


