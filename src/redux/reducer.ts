import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";

const initialState: any = {
    articles: [],
    foundBySummary: [],
    keyword: '  '
}
export const articlesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_ARTICLES': {
            return {
                ...state,
                articles: action.payload
            }
        }
        case 'SET_KEYWORD': {
            return {
                ...state,
                keyword: action.payload
            }
        }
        case 'UPDATE_FOUND_ARTICLES': {

            const foundBySummary = action.payload
            return {
                ...state,
                foundBySummary: foundBySummary
            }
        }
        case 'UPDATE_STORE_ARTICLES': {

            return {
                ...state,
                articles: [...state.articles, ...action.payload]
            }
        }
        default: {
            return state
        }
    }
}

export const articlesStore = configureStore({reducer: articlesReducer})

