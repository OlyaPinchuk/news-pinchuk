import ArticleComponent from "../article/articleComponent";
import './articles.css'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setStoreArticles} from "../../redux/actionCreators";

const ArticlesComponent = () => {

    const articlesStore = useSelector((state: any) => state.articles)
    const keyword = useSelector((state: any) => state.keyword)
    const dispatch = useDispatch()
    const foundBySummary = useSelector((state: any) => state.foundBySummary)

    useEffect(() => {
      fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=10`)
          .then(res => res.json())
          .then(data => {
              dispatch(setStoreArticles(data))
          })
    }, [])



    return <div className='articles-container'>

        {articlesStore && articlesStore.map((a: any) => <ArticleComponent key={Math.floor(new Date().valueOf() * Math.random())} article={a}></ArticleComponent> )}
        {foundBySummary.length > 0 && foundBySummary.map((a:any) => <ArticleComponent key={Math.floor(new Date().valueOf() * Math.random())} article={a}></ArticleComponent> ) }
    </div>
}


export default ArticlesComponent;