import ArticleComponent from "../article/articleComponent";
import './articles.scss';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setStoreArticles} from "../../redux/actionCreators";
import {IArticle} from "../../interfaces/articleInterface";
import useFetch from "../../hooks/useFetch";

const ArticlesComponent = () => {

    const articlesStore: IArticle[] = useSelector((state: any) => state.articles)
    const dispatch = useDispatch()
    const foundBySummary: IArticle[] = useSelector((state: any) => state.foundBySummary)
    const data = useFetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=10`)

    useEffect(() => {
        data && dispatch(setStoreArticles(data))
        // eslint-disable-next-line
    }, [data])

    return <div className='articles-container'>
        {articlesStore && articlesStore.map((a: IArticle) => <ArticleComponent key={Math.floor(new Date().valueOf() * Math.random())} article={a}></ArticleComponent> )}
        {foundBySummary.length > 0 && foundBySummary.map((a:IArticle) => <ArticleComponent key={Math.floor(new Date().valueOf() * Math.random())} article={a}></ArticleComponent> ) }
    </div>
}


export default ArticlesComponent;