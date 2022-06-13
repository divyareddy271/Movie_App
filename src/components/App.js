
import Navbar from "./Navbar";
import {data} from "./data";
import { addmovies, setshowfavourite } from "../Actions";
import Movietracker from "./Movietracker"
import "../index.css"
import React from "react";
import { connect } from "..";
import { render } from "@testing-library/react";
import { search } from "../Reducer";
class App extends React.Component {
  
  componentDidMount(){
   // const {store} = this.props;
  //   //if api, make api calls
  //   //dispatch actions
  //   store.subscribe(() => {
  //     console.log("updated!!");
  //     this.forceUpdate();
    // }
    // );
    this.props.dispatch(addmovies(data));
  }
  isFavourite = (movie) =>{
    const {movies} = this.props;
   
    const index = movies.favourite.indexOf(movie);
    
    if(index === -1){
      return false;
    }
    else{
  //    console.log("index",movie, "  ",index);
      return true;
    }
  }
  onchangetab = (val) => {
    this.props.dispatch(setshowfavourite(val));
  }
  render(){
    const {movies,search} = this.props;
    const {list, showfavourite = [], favourite = []} = movies;
    const displaymovies =  showfavourite ? favourite : list;
    console.log("getstate",this.props);
    console.log("rendered");
    return (
      <div className="App">
        <Navbar dispatch = {this.props} search = {search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showfavourite ? '': 'active-tabs'}`} onClick={() => this.onchangetab(false)}> Movies</div>
            <div className={`tab ${showfavourite ? 'active-tabs': ''}`}  onClick={() => this.onchangetab(true)}> Favourites </div>
          </div>
          <div className="Movies-list">
              {displaymovies.map((movie,index) => (
                <Movietracker movie = {movie} 
                key = {`movie-${index}`}
                dispatch = {this.props.dispatch}
                store = {this.props}
                ismoviefavourite = {this.isFavourite(movie)}/>
              ))}
              
          </div>
          <div>
            {displaymovies.length === 0 ? <div className="No-movies">No movies to display!!</div>: null}
          </div>
        </div>
      </div>
  
    );
  }
}
// class AppWrapper extends React.Component {
//   render() {
//    return (
//     <StoreContext.Consumer>
//     {(store) => (
//       <App store = {store} ></App>
//     )}
//   </StoreContext.Consumer>
//    )
//   }
// }
function callback (state){
  return{
    movies : state.movies,
    search  : state.search
  }
}
const connectedComponent = connect (callback)(App);
export default connectedComponent;


