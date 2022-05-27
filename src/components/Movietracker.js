import "../index.css";
import React from "react";
import { render } from "@testing-library/react";
class Movietracker extends React.Component{
  
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
              <button className="favBtn">Favourites</button>
            </div>
          </div>
        </div>
      );
  }
  
};
export default Movietracker;
