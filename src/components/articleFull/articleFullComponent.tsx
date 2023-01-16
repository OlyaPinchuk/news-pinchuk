import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import './articleFull.css'

const ArticleFullComponent = () => {

    const {id} = useParams()
    const [article, setArticle] =useState<any>()

    useEffect(() => {
        fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
            .then(res => res.json())
            .then(data => setArticle(data))
    },[])

    return <div>
        {article && <div className='article-full'>
            <img src={article.imageUrl}/>
            <img src={article.imageUrl}/>
            <div className='article-full-card'>
                <div className='article-full-title'>{article.title}</div>
                <div>{article.summary}</div>
            </div>
        </div>}
        <div className='back'>Back to homepage</div>
    </div>
}

export default ArticleFullComponent;