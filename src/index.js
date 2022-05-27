import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'
import App from './components/App';
import movies from './Reducer';
const store = createStore(movies)
console.log(store);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);


