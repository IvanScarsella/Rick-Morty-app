import { ADD_FAVORITES, CLEAN_DETAIL, FILTER_CARDS, GET_CHARACTER_DETAIL, GET_FAVORITES, ORDER_CARDS, REMOVE_FAVORITE } from "./actions";

const initialState = {
    characterDetail: [],
    myFavorites: []
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== action.payload
                ),
            };
        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: action.payload,
            };
        case GET_FAVORITES:
            return { ...state, myFavorites: action.payload 
            };
        case CLEAN_DETAIL:
            return {
                ...state,
                characterDetail: {},
            };
        case FILTER_CARDS:
            const { allCharacters } = state;
            const allCharsFiltered = allCharacters.filter(char => char.gender === action.payload);
            return {
                ...state,
                myFavorites: allCharsFiltered
            };
        case ORDER_CARDS:
            if (action.payload === "Ascendente"){
                return {
                    ...state,
                      myFavorites: allCharacters.sort((a ,b) => a.id < b.id)
                }
            } else if (action.payload === "Descendente"){ 
                return {
                    ...state,
                    myFavorites: allCharacters.sort((a ,b) => a.id < b.id)
                }
                }
        default:
             return { ...state };
    }
}

export default rootReducer;