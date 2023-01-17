export interface IArticle {
    id: number,
    title: string,
    summary: string,
    publishedAt: string,
    imageUrl: string,
}

export interface IArticleProps {
    article: IArticle
}

export interface IState {
    articles: IArticle[],
    foundBySummary: IArticle[],
    keyword: string
}

export interface IAction {
    type: string,
    payload: any
}