
import Navbar from "./Navbar";
import {data} from "./data";
import { addmovies, setshowfavourite } from "../Actions";
import Movietracker from "./Movietracker"
import "../index.css"
import React from "react";
import { render } from "@testing-library/react";
class App extends React.Component {
  
  componentDidMount(){
    const {store} = this.props;
    //if api, make api calls
    //dispatch actions
    store.subscribe(() => {
      console.log("updated!!");
      this.forceUpdate();
    });
    store.dispatch(addmovies(data));
  }
  isFavourite = (movie) =>{
    const {movies} = this.props.store.getState();
   
    const index = movies.favourite.indexOf(movie);
    
    if(index === -1){
      return false;
    }
    else{
      console.log("index",movie, "  ",index);
      return true;
    }
  }
  onchangetab = (val) => {
    const {store} = this.props;
    store.dispatch(setshowfavourite(val));
  }
  render(){
    const {movies} = this.props.store.getState();
    const {list,favourite, showfavourite} = movies;
    const displaymovies =  showfavourite ? favourite : list;
    console.log("getstate",this.props.store.getState(),list);
    console.log("rendered");
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showfavourite ? '': 'active-tabs'}`} onClick={() => this.onchangetab(false)}> Movies</div>
            <div className={`tab ${showfavourite ? 'active-tabs': ''}`}  onClick={() => this.onchangetab(true)}> Favourites </div>
          </div>
          <div className="Movies-list">
              {displaymovies.map((movie,index) => (
                <Movietracker movie = {movie} 
                key = {`movie-${index}`}
                dispatch = {this.props.store.dispatch}
                store = {this.props.store}
                ismoviefavourite = {this.isFavourite(movie)}/>
              ))}
              
          </div>
          <div>
            {showfavourite ? <div className="No-movies">No movies to display!!</div>: null}
          </div>
        </div>
      </div>
  
    );
  }
}

export default App;

