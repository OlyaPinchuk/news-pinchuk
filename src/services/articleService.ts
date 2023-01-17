
export const getAllArticles = () => {
    return fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=10`).then(res => res.json())
}

export const findArticlesByTitle = (keyword: string) => {
    return fetch(`https://api.spaceflightnewsapi.net/v3/articles?title_contains=${keyword}`).then(res => res.json())
}

export const findArticlesBySummary = (keyword: string) => {
    return fetch(`https://api.spaceflightnewsapi.net/v3/articles?summary_contains=${keyword}`).then(res => res.json())
}

export const getChosenArticle = (id: string | undefined) => {
    return fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`).then(res => res.json())
}