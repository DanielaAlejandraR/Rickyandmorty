import { ADD_FAVORITES, DELETE_FAVORITE, FILTER, ORDER } from "./actions-types";

export const addFavorite = (character) => {
    return {
        type: ADD_FAVORITES,
        payload: character
    }
}


export const deleteFavorite = (id)=> {
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
}

export const order = (id)=> {
    return {
        type: ORDER,
        payload: id
    }
}

export const filter = (gender)=> {
    return {
        type: FILTER,
        payload: gender
    }
}


