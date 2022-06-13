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
export function connect(callback) {
  return function (Component) {
    class ConnectedComponent extends React.Component {
      constructor(props){
        super(props);
        this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
      }
      componentWillUnmount () {
        this.unsubscribe();
      }
      render() {
       
          const {store} = this.props;
          const state = store.getState();
          const thisdatatobepassed = callback(state);
          return (<Component {...thisdatatobepassed} dispatch = {store.dispatch}> </Component> );
      
      
    }
  }
    class ConnectedComponentWrapper extends React.Component {
      render() {
           return (
            <StoreContext.Consumer>
            {(store) => (
              <ConnectedComponent store = {store} ></ConnectedComponent>
            )}
          </StoreContext.Consumer>
           )
          }
    }
    return ConnectedComponentWrapper;
  }
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


