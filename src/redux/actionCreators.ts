export const setStoreArticles = (payload: any) => {
    return {type: 'SET_ARTICLES', payload: payload}
}

export const setStoreKeyword = (payload: any) => {
    return {type: 'SET_KEYWORD', payload: payload}
}

export const updateFoundArticles = (payload: any) => {
    return {type: 'UPDATE_FOUND_ARTICLES', payload: payload}
}

export const updateStoreArticles = (payload: any) => {
    return {type: 'UPDATE_STORE_ARTICLES', payload: payload}
}

