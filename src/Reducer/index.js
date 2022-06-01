import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITE } from "../Actions";

const initialmoviestate = {
    list :[],
    favourite: [],
    showfavourite: false,
}

export default function movies (state = initialmoviestate, action) {
    
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
