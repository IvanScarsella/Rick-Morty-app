import { Action } from "@remix-run/router";
import { all } from "axios";
import { ADD_FAVORITES, FILTER_CARDS, ORDER_CARDS, REMOVE_FAVORITES } from "./action_type";

const initialState = {
    allCharacters: [],
    myFavorites: []
}

export default function rootReducer(state=initialState, {type, payload}){
    switch (type) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.myFavorites]
            };
        case REMOVE_FAVORITES:
            const filtered = state.myFavorites.filter((id)=>{
                return id !== payload
            })
            return {
                ...state,
                myFavorites: filtered
            };
        case FILTER_CARDS:
            const { allCharacters } = state;
            const allCharsFiltered = allCharacters.filter(char => char.gender === payload);
            return {
                ...state,
                myFavorites: allCharsFiltered
            };
        case ORDER_CARDS:
            if (payload === "Ascendente"){
                return {
                    ...state,
                      myFavorites: allCharacters.sort((a ,b) => a.id < b.id)
                }
            } else if (payload === "Descendente"){ 
                return {
                    ...state,
                    myFavorites: allCharacters.sort((a ,b) => a.id < b.id)
                }
                }
        default:
             return { ...state };
    }
}