import { ADD_FAVORITES, REMOVE_FAVORITES, FILTER_CARDS, ORDER_CARDS } from "./action_type";

export const addFavorites = (character) => {
    return {
        type: ADD_FAVORITES,
        payload: character
    };
}

export const removeFavorites= (character) => {
    return {
        type: REMOVE_FAVORITES,
        payload: character
    };
}

export const filterCards = (gender) => {
    return {
        type: FILTER_CARDS,
        payload: gender
    };
}

export const orderCards = (id) => {
    return {
        type: ORDER_CARDS,
        payload: id
    };
}