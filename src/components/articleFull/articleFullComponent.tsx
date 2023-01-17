import {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import './articleFull.scss';
import arrow from './arrowLeft.svg';
import {IArticle} from "../../interfaces/articleInterface";
import useFetch from "../../hooks/useFetch";
import {Card, Typography} from "@mui/material";

const ArticleFullComponent = () => {

    const {id} = useParams()
    const [article, setArticle] = useState<IArticle>()
    const articleFromHook = useFetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)

    useEffect(() => {
        articleFromHook && setArticle(articleFromHook)
    },[articleFromHook])

    return <div>
        {article && <div className='article-full'>
            <div className='image-div'>
                <img src={article.imageUrl} alt='article'/>
            </div>
            <Card className='article-full-card'>
                <Typography className='article-full-title'>{article.title}</Typography>
                <Typography className='article-full-summary'>{article.summary}</Typography>
            </Card>
        </div>}
        <Link className='back' style={{ textDecoration: 'none', color: '#363636' }} to='/'>
            <img src={arrow} alt='arrow'/>
            Back to homepage
        </Link>
    </div>
}

export default ArticleFullComponent;