import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITE } from "../Actions";

const initialmoviestate = {
    list :[],
    favourite: [],
    showfavourite: false,
}
const initialsearchstate = {
    search : {},
}

const initialrootstate = {
   movies: initialmoviestate,
   search: initialsearchstate,
}


export  function movies (state = initialmoviestate, action) {
    console.log("Movies Rendered")
    switch(action.type) {

        case ADD_MOVIES :
            return {
                ...state,
                list : action.movies
            
            };
        case ADD_FAVOURITE :
            console.log("called");
            return {
                ...state,
                favourite : [action.movie,...state.favourite]
            };
        case REMOVE_FAVOURITE :
            const moviefilter = state.favourite.filter (movie => movie.Title !== action.movie.Title)

            return {
                ...state,
                favourite : moviefilter,
            }
        case SET_SHOW_FAVOURITE :
            return {
                ...state,
                showfavourite : action.val,
            }
        default :
        return state;

    }
    
}
export function search (state = initialsearchstate, action) {
    console.log("Search Rendered")
    return state
    
}
export default function RootReducer(state = initialrootstate,action){
    return{
        movies : movies(state.movies,action),
        search : search(state.search,action),
    }
    
}