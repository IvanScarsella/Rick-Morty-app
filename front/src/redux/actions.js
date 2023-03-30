import axios from "axios";

export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const GET_FAVORITES = "GET_FAVORITES"
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const ORDER_CARDS = "ORDER_CARDS";
export const FILTER_CARDS = "FILTER_CARDS";

export const removeFavorite= (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id
    };
}

export const getFavorites = () => {
    return async function (dispatch) {
        const URL_BASE = "http://localhost:3001";
        const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
        dispatch({ type: GET_FAVORITES, payload: response.data })
    }
}

export const getCharacterDetail = (id) => {
    return async function (dispatch) {
        const URL_BASE = "http://localhost:3001";
        const response = await axios.get(`${URL_BASE}/detail/${id}`);
        dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data })
    }
}

export const cleanDetail = (id) => {
    return{ type: CLEAN_DETAIL }
};

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