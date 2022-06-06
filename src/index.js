import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore,applyMiddleware } from 'redux';

import App from './components/App';
import RootReducer from './Reducer';
import { createContext } from 'react';
import { render } from '@testing-library/react';

/*const logger = (obj) => {
  return function(next) {
    return function(action) {
      console.log("action-type",action.type);
      next(action);
    }
  }
}*/
//curried logger
const logger = ({dispatch,getState}) => (next) => (action) => {
 
  console.log("action-type",action.type);
      next(action);
}
const thunk = ({dispatch,getState}) => (next) => (action) => {
  if(typeof action ==='function'){
    action(dispatch);
    return;
  }
  next(action)
}


export const StoreContext = createContext();
class Provider extends React.Component{
  render(){
    const {store} = this.props;
   return (
    <StoreContext.Provider value ={store}>
    {this.props.children}
  </StoreContext.Provider>
   )
   }
}
const store = createStore(RootReducer,applyMiddleware(logger,thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App store = {store} />
    </Provider>
  </React.StrictMode>
);


