import {IArticle} from "../interfaces/articleInterface";
import {SET_ARTICLES, SET_KEYWORD, UPDATE_FOUND_ARTICLES, UPDATE_STORE_ARTICLES} from "./actionTypes";

export const setStoreArticles = (payload: IArticle[]) => {
    return {type: SET_ARTICLES, payload: payload}
}

export const setStoreKeyword = (payload: string) => {
    return {type: SET_KEYWORD, payload: payload}
}

export const updateFoundArticles = (payload: IArticle[]) => {
    return {type: UPDATE_FOUND_ARTICLES, payload: payload}
}

export const updateStoreArticles = (payload: IArticle[]) => {
    return {type: UPDATE_STORE_ARTICLES, payload: payload}
}

