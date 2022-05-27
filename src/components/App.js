
import Navbar from "./Navbar";
import {data} from "./data";
import Movietracker from "./Movietracker"
import "../index.css"
import React from "react";
import { render } from "@testing-library/react";
class App extends React.Component {
  
  componentDidMount(){
    const {store} = this.props
    //if api, make api calls
    //dispatch actions
    store.subscribe=() => {
      console.log("updated!!");
      this.forceUpdate();
    }
    store.dispatch({
      type: "ADD_MOVIES",
      movies:data
    })
    console.log("after state",store.getState());
    
  }
  render(){
    const movies = this.props.store.getState();
    console.log("rendered");
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab"> Movies</div>
            <div className="tab"> Favourites </div>
          </div>
          <div className="Movies-list">
              {movies.map((movie,index) => (
                <Movietracker movie = {movie} key = {`movie-${index}`} />
              ))}
          </div>
        </div>
      </div>
  
    );
  }
}

export default App;

