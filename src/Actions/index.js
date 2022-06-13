//{
 //type : "ADD_MOVIES";
//}
//{
//    type : "REMOVE_MOVIES";
//}
//action types
export const ADD_MOVIES=  "ADD_MOVIES";
export const ADD_FAVOURITE=  "ADD_FAVOURITE";
export const SET_SHOW_FAVOURITE=  "SET_SHOW_FAVOURITE";
export const REMOVE_FAVOURITE=  "REMOVE_FAVOURITE";
export const ADD_SEARCH_MOVIE = "ADD_SEARCH_MOVIE";
export const ADD_MOVIES_TO_LIST = "ADD_MOVIES_TOLIST";
//ACTION CREATIONS
export function addmovies  (movies) {
    return {
        type : ADD_MOVIES,
        movies: movies,
    }
}
export function addMovieToList (movie) {
    return {
        type : ADD_MOVIES_TO_LIST,
        movie,
    }
}
export function addfavourite (movie) {
    return {
        type : ADD_FAVOURITE,
        movie,
    }
}
export function removefavourite (movie) {
    
    return {
        type : REMOVE_FAVOURITE,
        movie,
    }
}
export function setshowfavourite (val)  {
    
    return {
        type : SET_SHOW_FAVOURITE,
        val,
    }
}
export const handleMovieSearch = (movie) => {
    
    return function(dispatch){
        const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
        fetch(url)
        .then(response => response.json())
        .then(movie => {console.log(movie)
            dispatch(AddSEARCHMOVIE(movie))
           //     type : "add_serach_results",
           //     movie
           // })
        })
    }  
}
export function AddSEARCHMOVIE (movie) {
    return {
        type : ADD_SEARCH_MOVIE,
        movie
    }
}