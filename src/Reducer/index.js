import { combineReducers } from "redux";
import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_SHOW_FAVOURITE,
  ADD_SEARCH_MOVIE,
  ADD_MOVIES_TO_LIST,
} from "../Actions";

const initialmoviestate = {
  list: [],
  favourite: [],
  showfavourite: false,
};
const initialsearchstate = {
  search: {},
  showSearchResults:false,
};

const initialrootstate = {
  movies: initialmoviestate,
  search: initialsearchstate,
};

export function movies(state = initialmoviestate, action) {
  console.log("Movies Rendered");
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE:
      console.log("called");
      return {
        ...state,
        favourite: [action.movie, ...state.favourite],
      };
    case REMOVE_FAVOURITE:
      const moviefilter = state.favourite.filter(
        (movie) => movie.Title !== action.movie.Title
      );

      return {
        ...state,
        favourite: moviefilter,
      };
    case SET_SHOW_FAVOURITE:
      return {
        ...state,
        showfavourite: action.val,
      };
    case ADD_MOVIES_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
       
      };
    default:
      return state;
  }
}
export function search(state = initialsearchstate, action) {
  switch (action.type) {
    case ADD_SEARCH_MOVIE:
      return {
        ...state,
        search: action.movie,
        showSearchResults:true,
      };
      case ADD_MOVIES_TO_LIST:
        return {
          ...state,
          showSearchResults:false,
        };
    default:
      return state;
  }
}
/* export default function RootReducer(state = initialrootstate,action){
    return{
        movies : movies(state.movies,action),
        search : search(state.search,action),
    }
} */
export default combineReducers({
  movies: movies,
  search,
});
