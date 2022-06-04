import "../index.css";
import React from "react";
import { render } from "@testing-library/react";
import { addfavourite, removefavourite } from "../Actions";
class Movietracker extends React.Component{
  handle_add_fav = () => {
    const {movie} = this.props;
   this.props.dispatch(addfavourite(movie));
   
    //console.log("reducer",this.props.dispatch(addfavourite(movie)));
  }
  handle_remove_fav = () => {
    const {movie} = this.props;
    this.props.dispatch(removefavourite(movie));
  }
  
  render(){
    const {movie} = this.props;
    return (
        <div className="movieWrapper">
          <div className="movie-poster">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="movie-details">
            <div className="title">{movie.Title} </div>
            <div className="description">{movie.Plot} </div>
            <div className="movie-rating">
              <div className="ratings">{movie.imdbRating} </div>
              <div> {this.props.ismoviefavourite}</div>
              {this.props.ismoviefavourite?
              <button className="unfavBtn" onClick={this.handle_remove_fav}>Unfavourites</button>
              :
              <button className="favBtn" onClick={this.handle_add_fav}>Favourites</button>
            }
            </div> 
          </div>
        </div>
      );
  }
  
};
export default Movietracker;
