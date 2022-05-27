import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'
import App from './components/App';
import movies from './Reducer';
const Store = createStore(movies)
console.log(Store);
console.log("getStore",Store.getState());
Store.dispatch({
  type: "ADD_MOVIES",
  movies:[{namemovvie : "SIpderman"}]
})
console.log("after state",Store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


