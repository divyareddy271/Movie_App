//{
 //type : "ADD_MOVIES";
//}
//{
//    type : "REMOVE_MOVIES";
//}
//action types
export const ADD_MOVIES=  " ADD_MOVIES";
//ACTION CREATIONS
export const addmovies = (movies) => {
    return {
        type : ADD_MOVIES,
        movies: movies,
    }
}