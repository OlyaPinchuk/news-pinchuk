import {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
// import './articleFull.css'
import './articleFull.scss'
import arrow from './arrowLeft.svg'
import {IArticle} from "../../interfaces/articleInterface";
// import {getChosenArticle} from "../../services/articleService";
import useFetch from "../../hooks/useFetch";

const ArticleFullComponent = () => {

    const {id} = useParams()
    const [article, setArticle] = useState<IArticle>()
    const articleFromHook = useFetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)

    useEffect(() => {

        articleFromHook && setArticle(articleFromHook)
        // getChosenArticle(id).then(data => setArticle(data))

    },[articleFromHook])

    return <div>
        {article && <div className='article-full'>
            <div className='image-div'>
                <img src={article.imageUrl} alt='article'/>
            </div>
            {/*<img src={article.imageUrl}/>*/}
            <div className='article-full-card'>
                <div className='article-full-title'>{article.title}</div>
                <div className='article-full-summary'>{article.summary}</div>
            </div>
        </div>}
        <Link className='back' style={{ textDecoration: 'none', color: '#363636' }} to='/'>
            <img src={arrow} alt='arrow'/>
            Back to homepage
        </Link>
    </div>
}

export default ArticleFullComponent;