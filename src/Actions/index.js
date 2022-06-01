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
//ACTION CREATIONS
export const addmovies = (movies) => {
    return {
        type : ADD_MOVIES,
        movies: movies,
    }
}
export const addfavourite = (movie) => {
    return {
        type : ADD_FAVOURITE,
        movie,
    }
}
export const removefavourite = (movie) => {
    
    return {
        type : REMOVE_FAVOURITE,
        movie,
    }
}
export const setshowfavourite = (val) => {
    
    return {
        type : SET_SHOW_FAVOURITE,
        val,
    }
}