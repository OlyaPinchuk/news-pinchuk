// import './article.css'
import calendar from './calendar.svg'
import arrow from './arrow.svg'
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'
import {IArticleProps} from "../../interfaces/articleInterface";
import './article.scss'




const ArticleComponent = (props: IArticleProps) => {

    const {article} = props

    const articleDate: string = new Date(article.publishedAt).toDateString().slice(3)

    const keyword: string = useSelector((state: any) => state.keyword)


    return <div className='article-container'>
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Ubuntu" rel="stylesheet"/>

        {article &&
            <div style={{borderRadius: '5px'}}>
                <img className='image' src={article.imageUrl} alt='article'/>
                <div className='card-content'>
                    <div className='date' >
                        <img  src={calendar} alt='calendar'/>
                        <span>{articleDate}</span>
                    </div>

                    <div className='title'>{article.title.split(' ').map((word:string) => {
                         return <span key={Math.floor(new Date().valueOf() * Math.random())} style={keyword.toLowerCase().includes(word.toLowerCase()) || word.toLowerCase().includes(keyword.toLowerCase()) ? {background: "yellow", borderRadius: "5px"} : {}}>{word} </span>
                    })
                    }</div>
                    <div className='summary' >{article.summary.substring(0, 100).split(' ').map((word: string) => {
                         return <span key={Math.floor(new Date().valueOf() * Math.random())} style={keyword.toLowerCase().includes(word.toLowerCase()) || word.toLowerCase().includes(keyword.toLowerCase()) ? {background: "yellow", borderRadius: "5px"} : {}}>{word} </span>
                    })}...</div>
                    <Link className='read-more' style={{ textDecoration: 'none', color: '#363636' }} to={`/articles/${article.id}`}>Read more
                        <img className='arrow' src={arrow} alt='arrow'/>
                    </Link>
                </div>
            </div>
        }
    </div>
}

export default ArticleComponent;